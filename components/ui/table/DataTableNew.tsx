"use client";

import { useRouter } from "next/navigation";

import { TbCirclePlus } from "react-icons/tb";

import { Button } from "@components/ui/button";

interface Props {
  dataName: string;
}

const DataTableNew = ({ dataName }: Props) => {
  const route = useRouter();

  const handleClick = () => {
    route.push(`${dataName}/new`);
  };

  return (
    <Button
      size="sm"
      className="ml-auto hidden capitalize lg:flex"
      onClick={handleClick}
    >
      <TbCirclePlus className="mr-2 h-4 w-4" />
      New {dataName}
    </Button>
  );
};

export default DataTableNew;
