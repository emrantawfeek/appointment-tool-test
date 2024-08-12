import { columns } from "./columns";

import { Appointment } from "@lib/validations";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import DataTable from "@components/ui/table/DataTable";

async function getData(): Promise<Appointment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "a3f4b2e1",
      client: "Alice Johnson",
      date: "2021-12-22",
      time: "2:45 PM",
      status: "Completed",
      note: "Patient was late",
    },
    {
      id: "5e8d2b1f",
      client: "Bob Brown",
      date: "2022-02-10",
      time: "11:30 AM",
      status: "Pending",
      note: "Patient was late",
    },
    {
      id: "3c4d6e2a",
      client: "Jane Smith",
      date: "2022-01-15",
      time: "9:10 AM",
      status: "Canceled",
      note: "Patient was late",
    },
    {
      id: "9f1e7c3b",
      client: "Charlie Davis",
      date: "2022-03-05",
      time: "4:20 PM",
      status: "Confirmed",
      note: "Patient was late",
    },
    {
      id: "b7d8a5c6",
      client: "John Doe",
      date: "2022-04-12",
      time: "7:55 AM",
      status: "Completed",
    },
    {
      id: "a3f4b2e1",
      client: "Alice Johnson",
      date: "2021-12-22",
      time: "2:45 PM",
      status: "Completed",
    },
    {
      id: "5e8d2b1f",
      client: "Bob Brown",
      date: "2022-02-10",
      time: "11:30 AM",
      status: "Pending",
    },
    {
      id: "3c4d6e2a",
      client: "Jane Smith",
      date: "2022-01-15",
      time: "9:10 AM",
      status: "Canceled",
    },
    {
      id: "9f1e7c3b",
      client: "Charlie Davis",
      date: "2022-03-05",
      time: "4:20 PM",
      status: "Confirmed",
    },
    {
      id: "b7d8a5c6",
      client: "John Doe",
      date: "2022-04-12",
      time: "7:55 AM",
      status: "Completed",
    },
    {
      id: "a3f4b2e1",
      client: "Alice Johnson",
      date: "2021-12-22",
      time: "2:45 PM",
      status: "Completed",
    },
    {
      id: "5e8d2b1f",
      client: "Bob Brown",
      date: "2022-02-10",
      time: "11:30 AM",
      status: "Pending",
    },
    {
      id: "3c4d6e2a",
      client: "Jane Smith",
      date: "2022-01-15",
      time: "9:10 AM",
      status: "Canceled",
    },
    {
      id: "9f1e7c3b",
      client: "Charlie Davis",
      date: "2022-03-05",
      time: "4:20 PM",
      status: "Confirmed",
    },
    {
      id: "b7d8a5c6",
      client: "John Doe",
      date: "2022-04-12",
      time: "7:55 AM",
      status: "Completed",
    },
  ];
}

export default async function UpcomingAppointments() {
  const data = await getData();

  return (
    <Card className="p-2">
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
        <CardDescription>
          Here's a quick overview of your upcoming appointments.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 overflow-hidden">
        <DataTable columns={columns} data={data} dataName="client" />
      </CardContent>
    </Card>
  );
}
