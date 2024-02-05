import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
//import Navbar from './Components/Navbar';
//import Hero from './Components/Hero';
//import Main from './Components/Main';
//import Main1 from './Components/Main1';
import Home from './Components/Home';
import About from './Components/About';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Components/style.css'
import ContactUs from './Components/ContactUs';
//import MainD from './MainD';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/dashboard';
import Bar from './scenes/bar';
import Pie from './scenes/Pie';




function App() {
  const [theme, colorMode] = useMode();
 
  return (

    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
  <CssBaseline />
          <div className="app">
            
            <main className="content" style={{ display: 'flex' }}>
              <Box flexGrow={1}>
                <Routes>

                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<ContactUs />} />


                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />

                </Routes>
              </Box>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>

  

  );
}

export default App;





