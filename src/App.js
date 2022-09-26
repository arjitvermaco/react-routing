import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';

function App() {

  let [userAuth, setUserAuth] = useState(true)

  function handleUserAuth(){
    setUserAuth(!userAuth)
  }

  return (
    <div className="body-wrapper">
      
      <NavBar/>
     
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>

   
    </div>
  );
}

export default App;
