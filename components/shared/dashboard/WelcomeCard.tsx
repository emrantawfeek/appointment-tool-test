import { IoRocketSharp } from "react-icons/io5";

import { Card } from "@components/ui/card";

interface WelcomeCardProps {
  name: string;
}

export default function WelcomeCard({ name }: WelcomeCardProps) {
  return (
    <Card className="flex w-full flex-col justify-between p-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center rounded-md bg-primary p-3">
          <IoRocketSharp className="h-6 w-6 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-semibold">Welcome {name}!</h3>
      </div>
      <p className="text-muted-foreground">
        We're excited to have you join our platform. Get ready to explore all
        the features and tools we have to offer. Let us know if you have any
        questions - we're here to help!
      </p>
    </Card>
  );
}
