"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface RouteObject {
  label: string;
  href: string;
}

const createRouteObject = (routes: string[]): RouteObject[] =>
  routes.map((route, index) => ({
    label: route.charAt(0).toUpperCase() + route.slice(1),
    href: index === 0 ? "/" : `/${routes.slice(1, index + 1).join("/")}`,
  }));

interface BreadcrumbRouteProps {
  initialRoute?: string;
}

const BreadcrumbRoute = ({
  initialRoute = "dashboard",
}: BreadcrumbRouteProps) => {
  const currentUrl = usePathname();
  const routes = currentUrl.split("/").filter((route) => route !== "");

  if (initialRoute) {
    routes.unshift(initialRoute);
  }

  const routeMap = createRouteObject(routes);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {routeMap.map((route, index) => {
          return index !== routes.length - 1 ? (
            <div className="inline-flex items-center gap-1.5" key={index}>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink asChild key={index}>
                  <Link href={route.href} key={index} className="capitalize">
                    {route.label}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator key={index} />
            </div>
          ) : (
            <BreadcrumbItem key={index}>
              <BreadcrumbPage key={index} className="capitalize">
                {route.label}
              </BreadcrumbPage>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbRoute;
