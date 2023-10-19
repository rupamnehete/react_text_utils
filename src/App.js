import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')
  const [modeName, setModeName] = useState('Enable')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      setModeName("Disable");
      document.body.style.backgroundColor = '#06234d';
    } else {
      setMode("light");
      setModeName("Enable");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" HomeText="Home" mode={mode} toggleMode={toggleMode} modeName={modeName}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  )
}

export default App;