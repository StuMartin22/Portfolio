import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footerbar  from '../src/components/MainUI/Footerbar'
import Headerbar  from '../src/components/MainUI/Headerbar'
import { Grommet } from 'grommet';
import Mainpage from './pages/Main'
import myTheme from './mytheme'
import Myprojects from './pages/Project';
import Mybio from './pages/About';
import Contact from './pages/Contact';
// import Mytest from './pages/Test';
import Weather from './pages/Weather'

function App() {
  return (
    <Grommet theme={myTheme}>
      
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

            {/* <Route
            path="/test"
            element={< Mytest />}
            /> */}

            <Route
            path="/weather"
            element={< Weather />}
            />

        </Routes>

        <Footerbar />

      </Router>

    </Grommet>
  );
}

export default App;