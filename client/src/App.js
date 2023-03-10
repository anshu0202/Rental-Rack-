import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from './components/Pages/Home';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Register from './components/Pages/register/Register';
function App() {
  return (
    <>
  
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </BrowserRouter>
  </>
    
  );
}

export default App;


