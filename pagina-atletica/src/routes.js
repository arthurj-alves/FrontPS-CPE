import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import Perfil from "./Pages/Perfil"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Cadastro from "./Pages/Cadastro"
import Produtos from "./Pages/Produtos"
import Header from "./Components/Header/Header";
import { isAuthenticated } from "./Services/auth";

const PrivateRoute = ({ redirectPath = '/login' }) => {
    if (!isAuthenticated()) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

function Rota() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/perfil" element={<Perfil />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Rota;