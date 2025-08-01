import IAbout from "../types/about/about";
import aboutMe from "@/src/about.json";
const getAboutData = async (): Promise<IAbout | null> => {
  // try {
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/about.json`,
  //     {
  //       next: { revalidate: 1800 }, // 30 mins
  //     },
  //   );

  //   if (!response.ok) throw new Error();

  //   return await response.json();
  // } catch (e) {
  //   console.error("About fetch error:", e);
  //   return null;
  // }
  return aboutMe as IAbout;
};

export default getAboutData;
