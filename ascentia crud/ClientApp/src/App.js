
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import NavBarComp from './Components/NavBarComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from './Components/Update';
import FoodMain from './Components/FoodMain';
import React from 'react';
import { FooterFood } from './Components/FooterFood';
function App() {
  return (
    <div >
       {/* <NavBarComp/> */}
   <BrowserRouter>
      <Routes>
     
  
    
   
    <Route exact path="/create" element={<Create/>}/> 
   <Route  exact path="/read" element={ <Read/>}/> 
   <Route  exact path="/update" element={<Update/>}/> 
   <Route exact path='/' element={<FoodMain/>} />
    </Routes>
    </BrowserRouter> 
    <FooterFood/>
    </div>
  );
}

export default App;
