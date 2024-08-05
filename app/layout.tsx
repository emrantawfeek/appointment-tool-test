import type { Metadata } from "next";

import { instrument, poppins } from "@styles/fonts";
import "@styles/globals.css";

import { cn } from "@lib/utils";

import { ThemeProvider } from "@context/ThemeProvider";

export const metadata: Metadata = {
  title: "Emran • Developer & Designer",
  description: "I Turn Ideas Into Reality & Solve Problems With Code",
  icons: {
    icon: "/assets/logo/E-emptySquarePlus.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.className,
          instrument.variable,
          "scrollbar bg-background",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex min-h-screen items-center justify-center">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
