import React from 'react';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import './about.css';
import Navbar from '../../navbar';
import Footer from '../../footer';

export const About = () => {
    return(
    <>
    <Navbar/>
    <div className="App">
      <header className="App-header">
        <h1>About</h1>
            <Box sx={{ width: '50%' }}>
              <Box>
              <p className="text-4xl"> This is an open-source project for the game No Man's Sky. This is a data base site with a search for beautiful ships and planets, and perhaps in the future the functionality will be added ;) </p>
              <br/>
              <h2>Made with</h2>
              </Box>
              <Box>
                <Box component="div" sx={{ display: 'inline' }}>
                  <a className="icons" href="https://mui.com/">
                  <Icon color="white" icon="simple-icons:mui" />
                  </a>
                </Box>
                <Box component="div" sx={{ display: 'inline' }}>
                  <a className="icons" href="https://en.reactjs.org/">
                  <Icon color="white" icon="logos:react" />
                  </a>
                </Box>
                <Box component="div" sx={{ display: 'inline' }}>
                  <a className="icons" href="https://tailwindcss.com/">
                  <Icon color="white" icon="logos:tailwindcss-icon" />
                  </a>
                </Box>
              </Box>
            </Box>
      </header>
    </div>
    <Footer/>
    </>
    );
}
