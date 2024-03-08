import { Typography } from "@mui/material";
import { useTypography } from "@surya-digital/leo-reactjs-core";
import React from "react";

interface TicketLabel {
  info: string;
}

const TicketDetails: React.FC<TicketLabel> = ({ info }): React.ReactElement => {
  const typography = useTypography();
  return <Typography sx={{ typography: typography.c1 }}>{info}</Typography>;
};

export default TicketDetails;
