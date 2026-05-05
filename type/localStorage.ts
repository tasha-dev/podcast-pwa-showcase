// Codes by mahdi tasha
// Creating and exporting type of saved things in local storage
export interface UserLocalStorage {
  loginWay?: "email" | "phone";
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  code?: string;
  image?: string;
  dateOfBirth?: string;
  password?: string;
}
