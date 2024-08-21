import { columns } from "./columns";

import { AppointmentsData } from "@constants/data";

import { AppointmentObject } from "@lib/validations";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import DataTable from "@components/ui/table/DataTable";

async function getData(orgId: string): Promise<AppointmentObject[]> {
  // Fetch data from your API here.
  return AppointmentsData.filter(
    (appointment) => appointment.orgId === orgId,
  );
}

export default async function UpcomingAppointments({
  orgId,
}: {
  orgId: string;
}) {
  const data = await getData(orgId);

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
