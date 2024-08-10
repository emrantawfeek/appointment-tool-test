import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  const hostname = req.headers.get("host")!;

  const path = url.pathname;

  let subdomain = hostname.split(".")[0];

  subdomain = subdomain.replace("localhost:3000", "");

  // handle no subdomain or www with base path
  if (subdomain === "www" || subdomain === "") {
    return NextResponse.next();
  }

  // handle no subdomain or www with base path
  if (subdomain === "admin") {
    return NextResponse.rewrite(
      new URL(`/${subdomain}${path === "/" ? "" : path}`, req.url),
    );
  }

  // subdomains
  if (subdomain !== "app") {
    return NextResponse.rewrite(
      new URL(`/${subdomain}${path === "/" ? "" : path}`, req.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
