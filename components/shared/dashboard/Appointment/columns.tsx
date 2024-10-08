"use client";

import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";

import { AppointmentObject } from "@lib/validations";

import Popover from "@components/shared/Popover";
import { Badge } from "@components/ui/badge";
import { Checkbox } from "@components/ui/checkbox";
import { DataTableColumnHeader } from "@components/ui/table/DataTableColumnHeader";

export const columns: ColumnDef<AppointmentObject>[] = [
  {
    accessorKey: "id",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "clientId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Client" />
    ),

    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      const date = row.getValue("date") as string;
      const formatedDate = moment(date, "YYYY-MM-DD").format("ll");
      return <>{formatedDate}</>;
    },
  },
  {
    accessorKey: "time",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time" />
    ),
    cell: ({ row }) => {
      const time = row.getValue("time") as string;
      const formatedTime = moment(time, "hh:mm:ss").format("LT");
      return <>{formatedTime}</>;
    },
  },
  {
    accessorKey: "note",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Note" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex justify-start">
          <Popover importedNote={row.getValue("note") as string | null} />
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      function getStatusVariant(status: string) {
        switch (status) {
          case "pending":
            return "outline";
          case "confirmed":
            return "secondary";
          case "canceled":
            return "destructive";
          case "completed":
            return "default";
          default:
            return "default"; // fallback if the status doesn't match any case
        }
      }
      const status = row.getValue("status") as string;
      const variant = getStatusVariant(status);
      return <Badge variant={variant}>{status}</Badge>;
    },
  },
];
