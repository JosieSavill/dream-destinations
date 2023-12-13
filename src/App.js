import { useState } from 'react';
import Main from './components/Main';



function App() {

  const [screen, setScreen] = useState("home");

  return (
    <div >
     
     <Main setScreen={setScreen} screen={screen}/>
      
      
    </div>
  );
}

export default App;
