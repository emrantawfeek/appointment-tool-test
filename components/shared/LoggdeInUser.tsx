import Image from "next/image";

import { cn } from "@/lib/utils";

const LoggedInUser = async ({
  hideName = false,
  className,
}: {
  hideName?: boolean;
  className?: string;
}) => {
  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  return (
    <>
      <div className={cn("flex h-10 w-10 items-center gap-x-4", className)}>
        <Image
          src={"/assets/images/3D-charachter.jpeg"}
          width={40}
          height={40}
          alt="user-picture"
          className="rounded-full"
        />
      </div>
      {!hideName && (
        <span className="block text-sm font-medium text-gray-700">
          {user?.firstName} {user?.lastName}
        </span>
      )}
    </>
  );
};

export default LoggedInUser;
