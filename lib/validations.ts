import validator from "validator";
import { z } from "zod";

export const ClientSchema = z.object({
  clientId: z.string(),
  firstName: z
    .string()
    .min(3, "First name must be between 3 and 100 characters"),
  lastName: z.string().min(3, "Last name must be between 3 and 100 characters"),
  gender: z.enum(["male", "female"]),
  email: z.string().email("Invalid email address"),
  phone: z.string().refine(validator.isMobilePhone, "Invalid phone number"),
});

export type ClientObject = z.infer<typeof ClientSchema>;

export const AppointmentSchema = z.object({
  appointmentId: z.string(),
  orgId: z.string(),
  clientId: z.string(),
  date: z.string().date(),
  time: z.string().time(),
  status: z.enum(["pending", "confirmed", "canceled", "completed"]),
  note: z.string().optional(),
});

export type AppointmentObject = z.infer<typeof AppointmentSchema>;

export const UserSchema = z.object({
  clerkId: z.string(),
  orgId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email("Invalid email address"),
  role: z.enum(["owner", "admin", "member"]),
});

export type UserObject = z.infer<typeof UserSchema>;

export const OrgSchema = z.object({
  orgId: z.string(),
  name: z
    .string()
    .min(3, "Organization name must be between 3 and 100 characters"),
  subdomain: z
    .string()
    .min(4, "Subdomain must be between 4 and 100 characters"),
});

export type OrgObject = z.infer<typeof OrgSchema>;
