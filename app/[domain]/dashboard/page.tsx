import { LuUserPlus2, LuUsers2 } from "react-icons/lu";

import QuickAccessCard from "@components/shared/dashboard/QuickAccessCard";

interface PageProps {
  params: {
    domain: string;
  };
}

export default function Page({ params }: PageProps) {
  const { domain } = params;

  return (
    <div className="flex space-y-6">
      <div className="flex w-full flex-row gap-6">
        <QuickAccessCard
          title="Clients"
          description="Quick access to your client management tools."
          viewLink={{ link: "/clients", icon: LuUsers2 }}
          handleAction={{
            text: "Add New Client",
            icon: LuUserPlus2,
          }}
        />
        <QuickAccessCard
          title="Clients"
          description="Quick access to your client management tools."
          viewLink={{ link: "/clients", icon: LuUsers2 }}
          handleAction={{
            text: "Add New Client",
            icon: LuUserPlus2,
          }}
        />
        <QuickAccessCard
          title="Clients"
          description="Quick access to your client management tools."
          viewLink={{ link: "/clients", icon: LuUsers2 }}
          handleAction={{
            text: "Add New Client",
            icon: LuUserPlus2,
          }}
        />
      </div>
    </div>
  );
}
