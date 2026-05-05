// Codes by mahdi tasha
// Importing part
import z from "zod";
import { isPhoneNumberValid } from "@persian-tools/persian-tools";

// Creating and exporting form schemas with zod
export const phoneNumberLogin = z.object({
  phoneNumber: z.string().refine((value) => isPhoneNumberValid(value), {
    message: "The phone number is not valid",
  }),
});

export const emailLogin = z.object({
  email: z.string().email(),
});

export const OTPLogin = z.object({
  code: z.string().length(4),
});

export const InfoForm = z.object({
  fullName: z.string().min(5).max(30),
  password: z.string().min(8).max(12),
  dateOfBirth: z.string(), // ISO string
  image: z.string(),
});
