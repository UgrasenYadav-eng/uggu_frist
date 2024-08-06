import './App.css';
import About from './Component/About';

import Navbar from './Component/Navbar.mjs';
import Textarea from './Component/Textarea';


function App() {
  return (
  <>
        <Navbar/>
         <div className='container'>
         <Textarea heading="Case Converter" />
        </div> 
       <About/>
  </>
  
  );
}

export default App;
