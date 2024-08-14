import validator from "validator";
import { z } from "zod";

export const ClientSchema = z.object({
  clientId: z.string(),
  firstName: z
    .string()
    .min(3, "First name must be between 3 and 100 characters"),
  lastName: z.string().min(3, "Last name must be between 3 and 100 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().refine(validator.isMobilePhone, "Invalid phone number"),
});

export type ClientObject = z.infer<typeof ClientSchema>;

export const AppointmentSchema = z.object({
  appointmentId: z.string(),
  clientId: z.string(),
  date: z.string().date(),
  time: z.string().time(),
  status: z.enum(["Pending", "Confirmed", "Canceled", "Completed"]),
  note: z.string().optional(),
  orgId: z.string(),
});

export type AppointmentObject = z.infer<typeof AppointmentSchema>;

export const UserSchema = z.object({
  orgId: z.string(),
  clerkId: z.string(),
  role: z.enum(["Owner", "Admin"]),
});
