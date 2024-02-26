import React from "react";
import { Box } from "@mui/material";
import Header from "../../componentsD/Header";
import BarChart from "../../componentsD/BarChart";
import { tokens } from "../../theme";
import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { ColorModeContext, useMode } from '../../theme';
import Navbar from "../../Components/Navbar";

const Bar = () => {
  const theme = useTheme();
  const [colorMode] = useMode();
 const colors = tokens(theme.palette.mode);
  return (
    <div>
       <Navbar />
    <Box m="20px">
     
      <Header title="HOD" subtitle="A bar chart comparison of accidents incidents provides a visually intuitive way to
       analyze and understand data related to accidents across different months in a year. The graph here
        has each bar representing incident and accident over specific interval,
       and the height of the bar corresponds to the frequency or number of incident and accident registered." />
      <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.blueAccent[500]}
        >
      <Box height="45vh">
        <BarChart />
      </Box>
      </Box>
    </Box>
    </div>
  );
};

export default Bar;