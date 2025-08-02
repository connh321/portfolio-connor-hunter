/**
 * Client-side component for the Hobbies & Interests section.
 *
 * This component displays a heading and renders the HobbiesClient component with the provided data.
 *
 * @module Hobbies
 */
import { Box, Typography } from "@mui/material";
import "./hobbies.scss";
import HobbiesClient from "@/src/components/client/about/hobbies-client/hobbies-client";

/**
 * Props for the Hobbies component.
 *
 * @property {string|undefined} data - The hobbies data to pass to the HobbiesClient component.
 */
interface Props {
  data: string | undefined;
}

/**
 * Hobbies component.
 *
 * This component displays a heading and renders the HobbiesClient component with the provided data.
 *
 * @param {Props} props - The props for the component.
 */
const Hobbies = async ({ data }: Props) => {
  return (
    <Box className="hobbies">
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
        }}
      >
        Hobbies & Interests
      </Typography>
      <HobbiesClient data={data} />
    </Box>
  );
};

export default Hobbies;
