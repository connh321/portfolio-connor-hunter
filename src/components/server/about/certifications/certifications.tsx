import { Box, Typography } from "@mui/material";
import "./certifications.scss";
import ICertification from "@/src/types/about/certification";
import CertificationsClient from "@/src/components/client/about/certifications-client/certifications-client";

interface Props {
  data: ICertification[] | undefined;
}
const Certifications = async ({ data }: Props) => {
  return (
    <Box className="certifications">
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Certifications
      </Typography>
      <CertificationsClient data={data} />
    </Box>
  );
};

export default Certifications;
