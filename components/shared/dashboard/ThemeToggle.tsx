"use client";

import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

import { Button } from "@components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="link"
            className="flex h-10 w-10 items-center justify-center p-0 md:h-8 md:w-8"
            onClick={handleThemeChange}
          >
            <LuSun className="h-5 w-5 rotate-0 scale-100 text-muted-foreground transition-all hover:text-foreground dark:-rotate-90 dark:scale-0" />
            <LuMoon className="absolute h-5 w-5 rotate-90 scale-0 text-muted-foreground transition-all hover:text-foreground dark:rotate-0 dark:scale-100" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Theme Toggle</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
