import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [accidentCount, setAccidentCount] = useState(0);
  const [incidentCount, setIncidentCount] = useState(0);

  useEffect(() => {
    // Fetch accident count from your backend API
    fetch("https://localhost:44369/api/Accident/GetAccidentCount")
      .then((response) => response.json())
      .then((data) => setAccidentCount(data))
      .catch((error) => console.error("Error fetching accident count:", error));

    // Fetch incident count from your backend API
    fetch("https://localhost:44369/api/Incident/GetIncidentCount")
      .then((response) => response.json())
      .then((data) => setIncidentCount(data))
      .catch((error) => console.error("Error fetching incident count:", error));
  }, []);

  // Calculate progress based on accident and incident counts
  const total = accidentCount + incidentCount;
  const progress = total > 0 ? (accidentCount / total).toFixed(2) : 0;

  // Calculate angle for the conic-gradient
  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.blueAccent[500]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.yellow[100]} ${angle}deg 360deg),
            ${colors.blueAccent[100]}`,
        borderRadius: "50%",
        width: "150px", // Set your desired size
        height: "150px", // Set your desired size
      }}
    />
  );
};

export default ProgressCircle;






/*import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ size = 40 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [incidents, setIncidents] = useState(0);
  const [accidents, setAccidents] = useState(0);

  useEffect(() => {
    // Fetch incidents count
    fetch('https://localhost:44369/api/Incident/GetIncidentCount')
      .then(response => response.json())
      .then(data => {
        setIncidents(data.count);
      })
      .catch(error => {
        console.error('Error fetching incidents count:', error);
      });

    // Fetch accidents count
    fetch('https://localhost:44369/api/Accident/GetAccidentCount')
      .then(response => response.json())
      .then(data => {
        setAccidents(data.count);
      })
      .catch(error => {
        console.error('Error fetching accidents count:', error);
      });
  }, []);

  // Calculate progress ratio
  const total = incidents + accidents;
  const progress = total > 0 ? incidents / total : 0;

  // Calculate angle for progress
  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.blueAccent[500]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[100]} ${angle}deg 360deg),
            ${colors.yellow[100]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;








/*import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.blueAccent[500]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[100]} ${angle}deg 360deg),
            ${colors.yellow[100]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;*/