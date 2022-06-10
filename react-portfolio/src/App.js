import React from 'react'
// import { Route, Routes} from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Footerbar  from './pages/Footerbar'
import  Headerbar  from './pages/Headerbar'
import Homepage from './pages/Homepage'
import { Grommet } from 'grommet';

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
    <Grommet theme={theme}>

    <Router>

      <Headerbar />
      
      <Routes>

        <Route 
          path="/" 
          element={< Homepage />}
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