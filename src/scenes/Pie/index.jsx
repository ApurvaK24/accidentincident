import React from "react"
import { Box } from "@mui/material";
import Header from "../../componentsD/Header";
import PieChart from "../../componentsD/PieChart";
import Navbar from "../../Components/Navbar";

const Pie = () => {
  return (
    <div>
      <Navbar />
    <Box m="20px">
      <Header title="QMD" subtitle="A pie chart depicting accidents and  incidents offers a compelling visual 
      representation that showcases the distribution of overall accident and incident occurrences across the company." />
      <Box height="55vh">v
        <PieChart />
      </Box>
    </Box>
    </div>
  );
};

export default Pie;