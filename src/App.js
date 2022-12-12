
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, SetMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      SetMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success")
    }else{
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <>
    <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route path='/' element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>}/>
            <Route path='/about' element={<About mode={mode}/>} />
          </Routes>
        </div>
      </BrowserRouter>
     </>
  );
}

export default App;
