import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [modeName, setModeName] = useState('Enable')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => [
    setAlert({
      msg: message,
      type: type
    }),
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  ]
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("info");
      setModeName("Disable");
      document.body.style.backgroundColor = '#06234d';
      showAlert("Dark Mode Enable", "info");
      // setInterval(() => {
      //   document.title = "Dark Mode";
      // }, 2000);
    } else {
      setMode("light");
      setModeName("Enable");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enable", "success");
      // setInterval(() => {
      //   document.title = "Light Mode";
      // }, 1500);
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About" HomeText="Home" mode={mode} toggleMode={toggleMode} modeName={modeName} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<div className="container my-3"><TextForm heading="Enter the text to analyze" mode={mode} alert={showAlert} /></div>}></Route>
          <Route path="/about" element={<div><About mode={mode}/></div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;