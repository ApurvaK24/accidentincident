import React, { useEffect, useState} from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../componentsD/Header";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../../theme';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BarChart from "../../componentsD/BarChart";
import StatBox from "../../componentsD/StatBox";
import ProgressCircle from "../../componentsD/ProgressCircle";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Dashboard = () => {
const theme = useTheme();
const [colorMode] = useMode();
const colors = tokens(theme.palette.mode);
 
const [incidentCount, setIncidentCount] = useState(null); // State to store the incident count
const [accidentCount, setAccidentCount] = useState(null);
const [employeeCount, setEmployeeCount] = useState(null);
const [hodCount, setHODCount] = useState(null);
  
 useEffect(() => {
  const fetchData = async () => {
    //GetIncidentCount
    try {
      const respIncidentCount = await fetch('https://localhost:44369/api/Incident/GetIncidentCount');
      if (!respIncidentCount.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await respIncidentCount.json();
      console.log('Incident count data:', jsonData); // Check the fetched incident count data
      setIncidentCount(jsonData); // Set the incident count in state
    } catch (error) {
      console.error('Error fetching data:', error);
      setIncidentCount(null); // Reset incident count to null in case of an error      
    }
    
    //GetAccidentCount
    try {
      const respAccidentCount = await fetch('https://localhost:44369/api/Accident/GetAccidentCount');
      if (!respAccidentCount.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await respAccidentCount.json();
      console.log('Accident count data:', jsonData); // Check the fetched Accident count data
      setAccidentCount(jsonData); // Set the Accident count in state
    } catch (error) {
      console.error('Error fetching data:', error);
      setAccidentCount(null); // Reset Accident count to null in case of an error      
    }
    //Add here GetEmployeesCount

    //Add here GetHODSCount

  };
  fetchData();
}, []);
  
  return (
  
  <div>
<Navbar />
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Admin Dashboard ARAI" subtitle="Monitor user engagement and safety with real-time data on total users, incidents and accidents." />

        <Box>
          {/*<Button
            sx={{
              backgroundColor: colors.grey[500],
              color: colors.yellow[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>*/}
        </Box>
          </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.blueAccent[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={incidentCount !== null ? incidentCount : "-"}
            subtitle="Incidents"
            progress="0.75"
            
            icon={
              <AssignmentIcon
                sx={{ color: colors.yellow[100], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.blueAccent[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title= {accidentCount !== null ? accidentCount : "-"}
            subtitle="Accidents"
            progress="0.50"
           
            icon={
              <AssignmentIndIcon
                sx={{ color: colors.yellow[100], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.blueAccent[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="Employees"
            progress="0.30"
            
            icon={
              <PersonAddIcon
                sx={{ color: colors.yellow[100], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.blueAccent[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="HODs"
            progress="0.80"
            
            icon={
              <AccountBoxIcon
                sx={{ color: colors.yellow[100], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.blueAccent[500]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="300"
                color={colors.yellow[100]}
              >
                Monthly Statistics
              </Typography>
              {/*<Typography
                variant="h3"
                fontWeight="bold"
                color={colors.yellow[100]}
              >
                9,342.32
          </Typography>*/}
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.yellow[100] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="230px" m="-20px 0 0 0">
            <BarChart isDashboard={true} />
          </Box>
        </Box>


        {/*<Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.blueAccent[500]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.yellow[100]} variant="h5" fontWeight="600">
              Incidents/Accidents Reported
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.yellow[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.yellow[100]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>*/}

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.blueAccent[500]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="300" color={colors.yellow[100]}>
          Proportion Pie
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.yellow[100]}
              sx={{ mt: "15px" }}
            >
              Incidents
            </Typography>
            <Typography>Accidents</Typography>
          </Box>
        </Box>
       
        
          
         
        </Box>
      </Box>
     
      </div>
  );
};

export default Dashboard;
