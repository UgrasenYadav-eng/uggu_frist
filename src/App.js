import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar.mjs';
import Textarea from './Component/Textarea';
import React, { useState } from 'react';


function App() {
  const [mode, setMode]= useState('light'); //wheather dark mode is enable or not.
  const toggleMode = () => {
    setMode(Mode => (Mode === 'light' ? 'dark' : 'light'));
  };
  return (
  <>
        <Navbar title="UGGU First" mode={mode} toggleMode={toggleMode} />
      <div className={`container bg-${mode}`}>
        <Textarea heading="Case Converter" />
        <About />
      </div>
  </>
  
  );
}

export default App;
