import React from "react";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Cards/Cards";
import { Link } from "react-router-dom";
import Produtos from ".";


const bone = {
    nome: "Boné",
    descricao: "Azul e Preto",
    imagem: "./images/bone.jpg",
};

const blusa = {
    nome: "Blusa da Atlética",
    descricao: "G, M, P e PP",
    imagem: "./images/blusa.jpg"
}

function Perfil(){
    return (
        <div>
        <Header/>
            <h1>Nossa loja!</h1>
            <div className="produtos">  
                <Cards produto={bone}/>
                <Cards produto={blusa}/>
            </div>
        </div>
    )  
}  

export default Produtos;