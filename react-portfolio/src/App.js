import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Footerbar  from './pages/Footerbar'
import  Headerbar  from './pages/Headerbar'
import { Grommet } from 'grommet';
import Mainpage from './pages/Main'
import myTheme from './mytheme'
import Contact from './pages/Contact'


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

        {/* <Route
          path="/about"
          element={< About />}
          /> */}

          <Route
          path="/contact"
          element={< Contact />}
          />

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