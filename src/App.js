// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import Home from './components/Home';
import About from './components/About';
// import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';


function App() {

  const [screen, setScreen] = useState("about");

  return (
    <div >
     
     <About setScreen={setScreen} screen={screen}/>
      
      
    </div>
  );
}

export default App;
