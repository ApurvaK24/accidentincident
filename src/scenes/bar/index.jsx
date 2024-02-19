import React from "react";
import { Box } from "@mui/material";
import Header from "../../componentsD/Header";
import BarChart from "../../componentsD/BarChart";
import { tokens } from "../../theme";
import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { ColorModeContext, useMode } from '../../theme';

const Bar = () => {
  const theme = useTheme();
  const [colorMode] = useMode();
 const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.blueAccent[500]}
        >
      <Box height="75vh">
        <BarChart />
      </Box>
      </Box>
    </Box>
  );
};

export default Bar;