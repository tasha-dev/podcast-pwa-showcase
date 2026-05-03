// Codes by mahdi tasha
// Importing part
import { create } from "zustand";

// Defining user store with zustand
const useUserStore = create((set) => ({
  user: {
    loggedInWith: undefined, // "email" | "Phone Number"
    phoneNumber: undefined, // string
    email: undefined, // string
    fullName: undefined, // string
    password: undefined, // string
    dateOfBirth: undefined, // string
  },
  setLoginMethod: (method: "email" | "number") =>
    set(() => ({
      user: {
        loggedInWith: method,
      },
    })),
  setPhoneNumber: (value: string) =>
    set(() => ({
      user: {
        phoneNumber: value,
      },
    })),
  setEmail: (value: string) =>
    set(() => ({
      user: {
        email: value,
      },
    })),
  setFullName: (value: string) =>
    set(() => ({
      user: {
        fullName: value,
      },
    })),
  setPassword: (value: string) =>
    set(() => ({
      user: {
        password: value,
      },
    })),
  setDateOfBirth: (value: string) =>
    set(() => ({
      user: {
        dateOfBirth: value,
      },
    })),
}));

// exporting the store as deafult
export default useUserStore;
