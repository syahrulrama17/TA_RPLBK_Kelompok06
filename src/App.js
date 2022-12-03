import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import Cake from "./components/Cake"
import Drink from "./components/Drink"
import Home from "./components/Home"
import React, { useState } from "react";
import Login from './components/Login';
import About from "./components/About"
import { Route, Routes } from "react-router-dom"

function App() {
    const [token, setToken] = useState(localStorage.getItem("userToken") ?? null)

  return (
    
    <>
    <div className="background">
          <Navbar setToken={setToken}/>
      <div className="container">
        <Routes>
          <Route path="/home" element={token ? <Home/> : <Login token={token} setToken={setToken}></Login>} />
          <Route path="/cake" element={token ? <Cake/> : <Login token={token} setToken={setToken}></Login>} />
          <Route path="/drink" element={token ? <Drink/> : <Login token={token} setToken={setToken}></Login>} />
          <Route path="/about" element={token ? <About/> : <Login token={token} setToken={setToken}></Login>} />
        </Routes>
        
      </div>
    <Footer/>
    </div>    
    </>
  )
 
}

export default App
