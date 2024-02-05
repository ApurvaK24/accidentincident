import React from "react"
import { Box } from "@mui/material";
import Header from "../../componentsD/Header";
import PieChart from "../../componentsD/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;