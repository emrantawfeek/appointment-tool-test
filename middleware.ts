import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { orgExistsBySubdomain } from "@database/actions/org.action";

const isDashboardRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { nextUrl, headers } = req;

  const hostname = headers.get("host")!;
  const path = nextUrl.pathname;

  let subdomain = hostname.split(".")[0];

  // If on vercel.app or other multi-segment domains, handle appropriately
  if (hostname.endsWith(".vercel.app")) {
    subdomain = hostname.split(".")[0]; // First segment before .vercel.app
  } else if (hostname === "localhost:3000") {
    subdomain = ""; // No subdomain in local development
  } else {
    // Custom domain or other cases (e.g., custom domains)
    subdomain = hostname.split(".")[0];
  }
  // Handle base domain or "www" subdomain cases
  if (!subdomain || subdomain === "www") {
    return NextResponse.next();
  }

  // Validate the existence of the organization by subdomain
  const isValidSubdomain = await orgExistsBySubdomain(subdomain);
  if (!isValidSubdomain) {
    return NextResponse.rewrite(
      new URL(`/${subdomain}/org-not-found`, req.url),
    );
  }

  // Allow sign-in and sign-up routes without subdomain checks
  if (path === "/sign-in" || path === "/sign-up") {
    return NextResponse.next();
  }

  if (isDashboardRoute(req)) auth().protect();

  // Rewrite URL to include subdomain in the path
  return NextResponse.rewrite(
    new URL(`/${subdomain}${path === "/" ? "" : path}`, req.url),
  );
});

export const config = {
  matcher: [
    // Exclude Next.js internal routes, API routes, and trpc routes
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
