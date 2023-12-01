// import logo from './logo.svg';
//import './css/App.css';
import { useState } from 'react';
// import Home from './components/Home';
import Main from './components/Main';
// import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';


function App() {

  const [screen, setScreen] = useState("home");

  return (
    <div >
     
     <Main setScreen={setScreen} screen={screen}/>
      
      
    </div>
  );
}

export default App;
