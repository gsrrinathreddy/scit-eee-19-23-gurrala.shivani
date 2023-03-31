import React from'react'
import logo from'./logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Qualification from './pages/Qualification';
import Aboutus from './pages/Aboutus';

import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Routes>
  
            <Route path="Aboutus" element ={<Aboutus/>}/>
            <Route path="Experience" element ={<Experience/>}/>
            <Route path="Hobbies" element ={<Hobbies/>}/>
            <Route path="Qualification" element ={<Qualification/>}/>
            <Route path="Skills" element ={<Skills/>}/>
        </Routes>
        </BrowserRouter>
        </div>
  );
}
 



       

        
 
export default App;
