import IAbout from "../types/about/about";
const getAboutData = async (): Promise<IAbout | null> => {
  try {
    const url = process.env.NEXT_PUBLIC_S3_ABOUT_URL;
    if (!url) {
      throw new Error(
        "NEXT_PUBLIC_S3_ABOUT_URL environment variable is not set",
      );
    }
    console.log("Fetching about data from:", url);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const response = await fetch(url, {
      headers,
      next: { revalidate: 1800 }, // 30 mins
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (e) {
    console.error("About fetch error:", e);
    return null;
  }
};

export default getAboutData;
