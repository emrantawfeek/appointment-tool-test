import Link from "next/link";
import { IconType } from "react-icons";

import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";

interface QuickAccessCardProps {
  title: string;
  description: string;
  viewLink: {
    link: string;
    icon: IconType;
  };
  handleAction: {
    onClick?: () => void;
    text: string;
    icon: IconType;
  };
}

export default function QuickAccessCard({
  title,
  description,
  viewLink,
  handleAction,
}: QuickAccessCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="capitalize">{title}</CardTitle>
        <CardDescription className="line-clamp-1">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex w-full flex-col gap-4">
        <Link href={viewLink.link} passHref>
          <Button variant="secondary" className="w-full">
            <viewLink.icon className="mr-2 h-5 w-5" />
            View Clients
          </Button>
        </Link>
        <Button variant="secondary" onClick={handleAction.onClick}>
          <handleAction.icon className="mr-2 h-5 w-5" /> {handleAction.text}
        </Button>
      </CardContent>
    </Card>
  );
}
