import { Row, Table } from "@tanstack/react-table";
import { download, generateCsv, mkConfig } from "export-to-csv";
import { TbTableExport } from "react-icons/tb";

import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
  dataName: string;
}

export function DataTableExport<TData>({
  table,
  dataName,
}: DataTableViewOptionsProps<TData>) {
  const csvConfig = mkConfig({
    fieldSeparator: ",",
    filename: `${dataName} data`,
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  });

  const exportExcel = (rows: Row<TData>[]) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData as any[]);
    download(csvConfig)(csv);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto hidden lg:flex">
          <TbTableExport className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuItem onClick={() => exportExcel(table.getRowModel().rows)}>
          Export All Data
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => exportExcel(table.getFilteredSelectedRowModel().rows)}
        >
          Export Selected
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => exportExcel(table.getFilteredRowModel().rows)}
        >
          Export Page Data
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
