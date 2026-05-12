// Codes by mahdi tasha
// Creating and exporting type of saved things in local storage
export type UserReactionsLocalStorage = {
   id: string;
   reaction: string; // EMOJI
}[];

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
