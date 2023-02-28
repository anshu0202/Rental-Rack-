import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Home from './components/Home';


function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/client" element={<Home/>} />
    
      <Route path=""/>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
