import React from 'react';
import NavBar from "./NavBar";
import Intro from "./Intro";
import Left from './Left';

function App() {
  const textToType = "I'm Anupriya Front-End Developer";
  return (
    
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Left text={textToType} />
        <Intro />
      </div>
    </div>
  );
}

export default App;
