import { Metadata } from "next";

import { LuCalendarDays, LuUsers2 } from "react-icons/lu";

import { ParamsProps } from "@types";

import capitalizeFirstLetter from "@lib/utils";

import { QuickAccessCard, WelcomeCard } from "@components/shared/dashboard";
import { UpcomingAppointments } from "@components/shared/dashboard/Appointment";
import { NewClient } from "@components/shared/dashboard/Client";

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  // read route params
  const { domain } = params;

  return {
    title: capitalizeFirstLetter(domain) + " • Dashboard",
  };
}

export default function Page({ params }: ParamsProps) {
  const { domain } = params;

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex w-full flex-grow flex-row gap-6">
        <WelcomeCard name={"Emran"} />
        <QuickAccessCard
          title="Customer"
          description="Quick access to your client management tools."
          viewLink={{ link: "/clients", icon: LuUsers2 }}
          actionButton={<NewClient variant="secondary" />}
        />
        <QuickAccessCard
          title="Appointment"
          description="Quick access to your client management tools."
          viewLink={{ link: "/appointments", icon: LuCalendarDays }}
          actionButton={<NewClient variant="secondary" />}
        />
      </div>
      <UpcomingAppointments orgId="org1" />
    </div>
  );
}
