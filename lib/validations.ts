import validator from "validator";
import { z } from "zod";

export const CustomerSchema = z.object({
  firstName: z
    .string()
    .min(3, "First name must be between 3 and 100 characters"),
  lastName: z.string().min(3, "Last name must be between 3 and 100 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().refine(validator.isMobilePhone, "Invalid phone number"),
});

export type Customer = z.infer<typeof CustomerSchema>;
