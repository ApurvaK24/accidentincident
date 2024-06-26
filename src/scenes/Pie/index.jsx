import React from "react"
import { Box } from "@mui/material";
import Header from "../../componentsD/Header";
import PieChart from "../../componentsD/PieChart";
import Navbar from "../../Components/Navbar";
import ProgressCircle from "../../componentsD/ProgressCircle";
import BarChart from "../../componentsD/BarChart";

const Pie = () => {
  return (
    <div>
      <Navbar />
    <Box m="20px">
      <Header title="QMD" subtitle="A pie chart depicting accidents and  incidents offers a compelling visual 
      representation that showcases the distribution of overall accident and incident occurrences across the company." />
      <Box height="75vh" >
        <PieChart />
        
     
      </Box>
    </Box>
    </div>
  );
};

export default Pie;