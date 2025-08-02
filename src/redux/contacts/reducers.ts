import { PayloadAction } from "@reduxjs/toolkit";
import IContacts from "@/src/types/contacts/contacts";

export const contactsSliceReducers = {
  setContacts(_: IContacts, action: PayloadAction<IContacts>) {
    return action.payload;
  },
};
