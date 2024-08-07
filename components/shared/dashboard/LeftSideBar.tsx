"use client";

import Logo from "@public/assets/logo/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { LuCog } from "react-icons/lu";

import { dashboardNav } from "@constants";

import { cn } from "@lib/utils";

import { ThemeToggle } from "@components/shared/dashboard/ThemeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";

// Type definitions for props
interface NavItemProps {
  icon: IconType;
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = React.memo(
  ({ icon: Icon, label, href }) => {
    let pathname = usePathname();

    if (pathname) {
      const segments = pathname.split("/");
      pathname = `/${segments[1]}`;
    } else {
      pathname = "/";
    }

    const isActive = href === pathname;

    return (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={href}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:text-foreground md:h-8 md:w-8",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{label}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{label}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
);

interface NavGroupProps {
  items: { icon: IconType; name: string; href: string }[];
}

const NavGroup: React.FC<NavGroupProps> = ({ items }) => (
  <div className="flex flex-col gap-2">
    {items.map((item, i) => (
      <NavItem
        key={`item-${i}`}
        label={item.name}
        icon={item.icon}
        href={item.href}
      />
    ))}
  </div>
);

const LeftSideBar: React.FC = () => (
  <aside className="inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
    <nav className="flex flex-col items-center gap-5 px-2 sm:py-5">
      <Link
        href="/"
        className="group flex h-7 w-7 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary md:h-8 md:w-8 md:text-base"
      >
        <Logo className="h-7 w-7 transition-all group-hover:scale-110 md:h-6 md:w-6" />
        <span className="sr-only">Emran Inc</span>
      </Link>
      <NavGroup items={dashboardNav} />
    </nav>
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
      <ThemeToggle />
      <NavItem label="Settings" icon={LuCog} href="#" />
    </nav>
  </aside>
);

export default LeftSideBar;
