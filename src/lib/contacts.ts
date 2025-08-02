import IContacts from "../types/contacts/contacts";
const getContactsData = async (): Promise<IContacts | null> => {
  try {
    const url = process.env.NEXT_PUBLIC_S3_CONTACTS_URL!;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const response = await fetch(url, {
      headers,
      next: { revalidate: 86400 }, // 24 hours
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (e) {
    console.error("Contacts fetch error:", e);
    return null;
  }
};

export default getContactsData;
