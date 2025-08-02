/**
 * Client-side component for the Certifications section.
 *
 * This component displays a heading and renders the CertificationsClient component with the provided data.
 *
 * @module Certifications
 */
import { Box, Typography } from "@mui/material";
import "./certifications.scss";
import ICertification from "@/src/types/about/certification";
import CertificationsClient from "@/src/components/client/about/certifications-client/certifications-client";

/**
 * Props for the Certifications component.
 *
 * @property {ICertification[]|undefined} data - The list of certifications to pass to the CertificationsClient component.
 */
interface Props {
  data: ICertification[] | undefined;
}

/**
 * Certifications component.
 *
 * This component displays a heading and renders the CertificationsClient component with the provided data.
 *
 * @param {Props} props - The props for the component.
 */
const Certifications = async ({ data }: Props) => {
  return (
    <Box className="certifications">
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
        }}
      >
        Certifications
      </Typography>
      <CertificationsClient data={data} />
    </Box>
  );
};

export default Certifications;
