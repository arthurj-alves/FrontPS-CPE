import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Perfil from "./Pages/Perfil"
import Home from "./Pages/Home"
import Login from "./Pages/Login"

function Rota(){
    return(
        <Router>
            <Routes>
                <Route path="/login" element = {<Login/>} />
                <Route path="/perfil" element = {<Perfil/>} />
                <Route path="/" element = {<Home/>} />
            </Routes>
        </Router>
    )
}

export default Rota;