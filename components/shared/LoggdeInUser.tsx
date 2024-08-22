"use client";

import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

import { cn } from "@lib/utils";

import { Skeleton } from "@components/ui/skeleton";

const LoggedInUser = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex h-10 w-10 items-center gap-x-4", className)}>
      <ClerkLoading>
        <Skeleton className="h-10 w-10 rounded-full" />
      </ClerkLoading>
      <UserButton
        appearance={{
          elements: {
            avatarBox: "h-10 w-10",
          },
          variables: {
            colorPrimary: "#2986cc",
          },
        }}
      />
    </div>
  );
};

export default LoggedInUser;
