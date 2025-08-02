import { createSlice } from "@reduxjs/toolkit";
import { contactsSliceReducers } from "./reducers";
import IContacts from "@/src/types/contacts/contacts";

export const initialState: IContacts = {
  github: "",
  linkedIn: "",
  email: "",
  phone: "",
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: contactsSliceReducers,
});
