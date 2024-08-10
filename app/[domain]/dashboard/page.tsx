import {
  LuCalendarDays,
  LuCalendarPlus,
  LuUserPlus2,
  LuUsers2,
} from "react-icons/lu";

import NewCustomer from "@components/shared/dashboard/Customer/NewCustomer";
import QuickAccessCard from "@components/shared/dashboard/QuickAccessCard";
import WelcomeCard from "@components/shared/dashboard/WelcomeCard";

interface PageProps {
  params: {
    domain: string;
  };
}

export default function Page({ params }: PageProps) {
  const { domain } = params;

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex w-full flex-grow flex-row gap-6">
        <WelcomeCard name={"Emran"} />
        <QuickAccessCard
          title="Customer"
          description="Quick access to your client management tools."
          viewLink={{ link: "/clients", icon: LuUsers2 }}
          actionButton={<NewCustomer variant="secondary" />}
        />
        <QuickAccessCard
          title="Appointment"
          description="Quick access to your client management tools."
          viewLink={{ link: "/appointments", icon: LuCalendarDays }}
          actionButton={<NewCustomer variant="secondary" />}
        />
      </div>
    </div>
  );
}
