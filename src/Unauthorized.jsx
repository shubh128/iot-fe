import React from "react";
import { Box } from "@mui/material";
export default function Unauthorized() {
  return (
    <Box
      sx={{
        typography: "title",
        fontWeight: "bold",
        fontSize: "h4.fontSize",
        color: "red",
      }}
    >
      Unauthorized
    </Box>
  );
}
