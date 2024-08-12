"use client";

import { DataTableExport } from "./DataTableExport";
import DataTableNew from "./DataTableNew";
import { DataTableViewOptions } from "./DataTableViewOptions";
import { Table } from "@tanstack/react-table";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  dataName: string;
}

export function DataTableToolbar<TData>({
  table,
  dataName,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <div className="relative w-full">
          <CiSearch className="absolute inset-y-0 left-3 my-auto h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event: { target: { value: string } }) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="w-[150px] bg-background pl-10 align-middle lg:w-[250px]"
          />
        </div>

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-9 px-2 lg:px-3"
          >
            Reset
            <RxCross2 className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <DataTableExport table={table} dataName={dataName} />
        <DataTableViewOptions table={table} />
        {/* <DataTableNew dataName={dataName} /> */}
      </div>
    </div>
  );
}
