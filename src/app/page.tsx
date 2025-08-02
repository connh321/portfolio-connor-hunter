"use server";
import Header from "@/src/components/client/header/header";
import About from "@/src/components/server/about/about";
import { Box, Stack } from "@mui/material";
import "./page.scss";
import Footer from "../components/server/footer/footer";
import Resume from "../components/server/resume/resume";
import Projects from "../components/server/projects/projects";
// import Contact from "../components/server/contact/contact";

export default async function Page() {
  return (
    <Box className="home">
      <Header />
      <Stack spacing={4} className="content" gap={8}>
        <About />
        <Projects />
        <Resume />
        {/* <Contact /> */}
      </Stack>
      <Footer />
    </Box>
  );
}
