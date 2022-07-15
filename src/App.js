import React from 'react'
import { HashRouter } from 'react-router-dom';
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

      </HashRouter>

    </Grommet>
  );
}

export default App;