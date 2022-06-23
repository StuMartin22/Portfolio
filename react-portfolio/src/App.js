import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footerbar  from './pages/Footerbar'
import Headerbar  from './pages/Headerbar'
import { Grommet } from 'grommet';
import Mainpage from './pages/Main'
import myTheme from './mytheme'
import Myprojects from './pages/Project';
import Mybio from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Grommet full theme={myTheme}>

    <Router>

      <Headerbar />
      
      <Routes>

        <Route 
          path="/" 
          element={< Mainpage />}
          />

        <Route
          path="/about"
          element={< Mybio />}
          />

          <Route
          path="/contact"
          element={< Contact />}
          />

          <Route
          path="/projects"
          element={< Myprojects />}
          />

      </Routes>

      <Footerbar />

    </Router>

    </Grommet>
  );
}

export default App;