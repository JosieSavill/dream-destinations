import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {

  const [screen, setScreen] = useState("Home");

  return (
    <div >
      {
        screen === "Home" && <Home setScreen={setScreen} />
      }
      {
        screen === "About" && <About setScreen={setScreen}/>
      }
       {
        screen === "Contact" && <Contact setScreen={setScreen}/>
      }
       {
        screen === "Portfolio" && <Portfolio setScreen={setScreen}/>
      }
       {
        screen === "Resume" && <Resume setScreen={setScreen}/>
      }
     
      
    </div>
  );
}

export default App;
