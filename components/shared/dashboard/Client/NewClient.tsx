import { LuUserPlus2 } from "react-icons/lu";

import { ResponsiveDialog } from "@components/shared/dashboard";
import { ClientForm } from "@components/shared/dashboard/Client";
import { Button, ButtonProps } from "@components/ui/button";

interface NewClientProps extends ButtonProps {
  hideIcon?: boolean;
}

export default function NewClient({
  hideIcon,
  ...buttonProps
}: NewClientProps) {
  return (
    <ResponsiveDialog
      title="New Customer"
      description="Add a new customer to your client list."
      trigger={
        <Button {...buttonProps}>
          {!hideIcon && <LuUserPlus2 className="mr-2 h-5 w-5" />}
          Add New Customer
        </Button>
      }
    >
      <ClientForm />
    </ResponsiveDialog>
  );
}
