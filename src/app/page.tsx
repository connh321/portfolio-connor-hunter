/**
 * Server-side rendered page component for the whole SPA.
 */
"use server";
import Header from "@/src/components/client/header/header";
import About from "@/src/components/server/about/about";
import { Box, Stack } from "@mui/material";
import "./page.scss";
import Footer from "../components/server/footer/footer";
import Resume from "../components/server/resume/resume";
import Projects from "../components/server/projects/projects";
import Contact from "../components/server/contact/contact";
import { Metadata } from "next";
import getAboutData from "../lib/about";
import IAbout from "../types/about/about";

/**
 * Cached about data.
 *
 * This variable stores the fetched about data to avoid repeated API requests.
 *
 * @type {IAbout | null}
 */
let cachedAboutData: IAbout | null = null;

/**
 * Fetches and caches about data from the API.
 *
 * If the data is already cached, it returns the cached data. Otherwise, it fetches the data from the API and caches it.
 *
 * @async
 * @returns {Promise<IAbout | null>} The cached about data.
 */
async function getCachedAboutData() {
  if (cachedAboutData) return cachedAboutData;
  cachedAboutData = await getAboutData();
  return cachedAboutData;
}

/**
 * Generates metadata for the page.
 *
 * This function fetches the about data and uses it to generate the page title and description.
 *
 * @async
 * @returns {Promise<Metadata>} The generated metadata.
 */
export async function generateMetadata(): Promise<Metadata> {
  const aboutData = await getCachedAboutData();

  return {
    title: "About Me - Connor Hunter",
    description: aboutData?.aboutMeShort ?? "",
  };
}

/**
 * Default export: the page component.
 *
 * This component renders the about page with the fetched about data.
 *
 * @async
 */
export default async function Page() {
  const aboutData = await getCachedAboutData();

  return (
    <Box className="home">
      <Header />
      <Stack spacing={4} className="content" gap={8}>
        <About data={aboutData} />
        <Projects />
        <Resume />
        <Contact />
      </Stack>
      <Footer />
    </Box>
  );
}
