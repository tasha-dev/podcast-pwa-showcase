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
