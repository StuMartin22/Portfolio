import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footerbar  from './components/Footerbar'
import Headerbar  from './components/Headerbar'
import { Grommet } from 'grommet';
import Mainpage from './pages/Main'
import myTheme from './mytheme'
import Myprojects from './pages/Project';
import Mybio from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Grommet theme={myTheme}>
      
      <HashRouter>

        <Headerbar />

          <Route 
            path="/" 
            component={< Mainpage />}
            />

          <Route
            path="/about"
            component={< Mybio />}
            />

            <Route
            path="/contact"
            component={< Contact />}
            />

            <Route
            path="/projects"
            component={< Myprojects />}
            />

        <Footerbar />

      </HashRouter>

    </Grommet>
  );
}

export default App;