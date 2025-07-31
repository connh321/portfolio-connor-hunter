import Header from "@/src/components/client/header/header";
import About from "@/src/components/server/about/about";
import { Box, Stack } from "@mui/material";
import "./page.scss";
// import Projects from "../components/server/projects/projects";
// import Resume from "../components/server/resume/resume";
// import ContactMe from "../components/server/contact-me/contact-me";

export default function Page() {
  return (
    <Box className="home">
      <Header />
      <Stack spacing={4} className="content">
        <About />
        {/* <Projects />
        <Resume />
        <ContactMe /> */}
      </Stack>
    </Box>
  );
}
