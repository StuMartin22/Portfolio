import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Footerbar  from './pages/Footerbar'
import  Headerbar  from './pages/Headerbar'
// import Homepage from './pages/Homepage'
import { Grommet } from 'grommet';
import Mainpage from './pages/Main'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet full='true' theme={theme}>

    <Router>

      <Headerbar />
      
      <Routes>

        <Route 
          path="/" 
          element={< Mainpage />}
          />

        {/* <Route
          path="/about"
          element={< About />}
          /> */}

          {/* <Route
          path="/contact"
          element={< Contact />}
          /> */}

          {/* <Route
          path="/projects"
          element={< Projects />}
          /> */}

      </Routes>

      <Footerbar />

    </Router>

    </Grommet>
  );
}

export default App;