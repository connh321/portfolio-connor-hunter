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

let cachedAboutData: IAbout | null = null;

async function getCachedAboutData() {
  if (cachedAboutData) return cachedAboutData;
  cachedAboutData = await getAboutData();
  return cachedAboutData;
}

export async function generateMetadata(): Promise<Metadata> {
  const aboutData = await getCachedAboutData();

  return {
    title: "About Me - Connor Hunter",
    description: aboutData?.aboutMeShort ?? "",
  };
}
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
