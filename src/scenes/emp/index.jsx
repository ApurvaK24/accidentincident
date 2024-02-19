import React, { useState } from 'react';
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../../theme';
import StatBox from "../../componentsD/StatBox";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faRightLong } from '@fortawesome/free-solid-svg-icons';
 

const Emp = () => {
    const navigate = useNavigate();
  const theme = useTheme();
  const [colorMode] = useMode();

  if (!theme || !colorMode) {
    console.error("Theme or colorMode is not available");
    return null;
  }

  const colors = tokens(theme.palette.mode);

  if (!colors) {
    console.error("Colors are not available");
    return null;
  }




  const handleAccRegisterClick = (type) => {
    navigate('/accident');
  };

  
  const handleInciRegisterClick = (type) => {
    navigate('/incident');
  };
  return (
    <div>
      <Navbar />
      <Box m="20px">
        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 3fr)"
          gridAutoRows="240px"
          gap="20px"
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 6"
            backgroundColor={colors.blueAccent[500]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ padding: '20px', marginTop: '50px' }}
          >
            <StatBox
              title={
                <Typography variant="h4" sx={{ fontSize: '38px' }}>
                  Register an Accident
                </Typography>
              }
              subtitle=""
              progress="0.75"
              increase=""
            >
              <Button
                sx={{ padding: '10px', marginTop: '30px', backgroundColor: 'yellow' }}
                variant="contained"
                color="primary"
                onClick={() => handleAccRegisterClick('Accident')}
              >
                <Typography variant="h4" sx={{ fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                  Register Accident
                  <Box ml={1}>
                    {/*<FontAwesomeIcon icon={faRightLong} />*/}
                  </Box>
                </Typography>
              </Button>
            </StatBox>
          </Box>




          <Box
            gridColumn="span 6"
            backgroundColor={colors.blueAccent[500]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ padding: '20px', marginTop: '50px' }}
          >
            <StatBox
              title={
                <Typography variant="h4" sx={{ fontSize: '38px' }}>
                  Register an Incident
                </Typography>
              }
              subtitle=""
              progress="0.75"
              increase=""
            >
              <Button
                sx={{ padding: '10px', marginTop: '30px', backgroundColor: 'yellow' }}
                variant="contained"
                color="primary"
                onClick={() => handleInciRegisterClick('Accident')}
              >
                <Typography variant="h4" sx={{ fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                  Register Incident
                  <Box ml={1}>
                    {/*<FontAwesomeIcon icon={faRightLong} />*/}
                  </Box>
                </Typography>
              </Button>
            </StatBox>
          </Box>





          {/* Add other boxes as needed */}
        </Box>
      </Box>
      <Footer />
      
    </div>
  );
};

export default Emp;