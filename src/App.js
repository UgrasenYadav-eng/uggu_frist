import './App.css';
import Navbar from './Component/Navbar.mjs';
import Textarea from './Component/Textarea';


function App() {
  return (
  <>
        <Navbar/>
        <div className='container'>
          <Textarea heading="Case Converter" />
        </div>

  </>
  
  );
}

export default App;
