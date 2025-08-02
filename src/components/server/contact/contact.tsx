/**
 * Server-side component for the Contact page.
 *
 * This component renders the Contact page with a heading and a ContactClient component.
 *
 * @module Contact
 */
"use server";
import { Box, Stack, Typography } from "@mui/material";
import "./contact.scss";
import ContactClient from "../../client/contact/contact-client";
import getContactsData from "@/src/lib/contacts";
import IContacts from "@/src/types/contacts/contacts";

/**
 * Contact component.
 *
 * This component renders the Contact page with a heading and a ContactClient component.
 *
 */
const Contact = async () => {
  const contacts: IContacts | null = await getContactsData();
  return (
    <Box id="contact">
      <Stack direction="column" spacing={2}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: "1rem !important",
          }}
        >
          Contact Me
        </Typography>
        <ContactClient data={contacts}></ContactClient>
      </Stack>
    </Box>
  );
};

export default Contact;
