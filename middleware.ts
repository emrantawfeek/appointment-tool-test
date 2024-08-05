import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  let hostname = req.headers.get("host")!;

  console.log("hostname:", hostname);

  const originalPathname = req.nextUrl.pathname;

  console.log("path:", originalPathname);
  console.log("New url:", `${hostname}${originalPathname}`);

  // rewrite everything else to `/[domain]/[slug] dynamic route
  // return NextResponse.rewrite(new URL(`/${hostname}${originalPathname}`, req.url));
}
