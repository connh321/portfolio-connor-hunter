import { Box, Typography } from "@mui/material";
import "./hobbies.scss";
import HobbiesClient from "@/src/components/client/about/hobbies-client/hobbies-client";

interface Props {
  data: string | undefined;
}
const Hobbies = async ({ data }: Props) => {
  return (
    <Box className="hobbies">
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Hobbies & Interests
      </Typography>
      <HobbiesClient data={data} />
    </Box>
  );
};

export default Hobbies;
