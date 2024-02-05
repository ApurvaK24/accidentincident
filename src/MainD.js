
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/dashboard';
import Bar from './scenes/bar';
import Pie from './scenes/Pie';


function MainD() {
    console.log('Rendering MainD component');
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Topbar setIsSidebar={setIsSidebar} />
            <main className="content" style={{ display: 'flex' }}>
              <Box flexGrow={1}>
                <Routes>


                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  
                </Routes>
              </Box>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    
  );
}

export default MainD;










