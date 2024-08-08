import { LuUserPlus2, LuUsers2 } from "react-icons/lu";

import QuickAccessCard from "@components/shared/dashboard/QuickAccessCard";
import { ResponsiveDialog } from "@components/shared/dashboard/ResponsiveDialog";
import { Button } from "@components/ui/button";

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
        <ResponsiveDialog
          title="Test"
          description="that is a test only."
          trigger={<Button variant="outline">Open Dialog</Button>}
        >
          <div className="flex w-full flex-col gap-4">
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
        </ResponsiveDialog>
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
