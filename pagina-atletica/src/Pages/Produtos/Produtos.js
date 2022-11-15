import React from "react";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Cards/Cards";
import './Produtos.css';


const bone = {
    nome: "Boné",
    descricao: " Cores em Azul e Preto",
    precoCheio: "R$40,00",
    precoDesconto: "R$36,00",
    imagem: "./images/bone.jpg",
};

const blusa = {
    nome: "Blusa da Atlética",
    descricao: "G, M, P e PP",
    precoCheio: "",
    precoDesconto: "R$50,00",
    imagem: "./images/blusa.jpg",
};

const shoulder = {
    nome: "Shoulder",
    descricao: "Shoulder bag preta masculina",
    precoCheio: "R$120,00",
    precoDesconto :"R$112,00",
    imagem: "./images/shoulder.jpg",
};

const tirante = {
    nome: "Tirante",
    descricao: "Tirante Preto",
    precoCheio: "R$10,00",
    precoDesconto: "R$8,00",
    imagem: "./images/tirante.jpg",
};

const caneca = {
    nome: "Caneca",
    descricao: "Caneca Azul de 600ml",
    precoCheio: "R$25,00",
    precoDesconto: "R$23,00",
    imagem: "./images/caneca.jpg",
};

function Produtos(){
    return (
        <div>
            <h1 className="titleProdutos">Nossa loja!</h1>
            <div className="produtos">  
                <Cards produto={bone}/>
                <Cards produto={blusa}/>
                <Cards produto={shoulder}/>
                <Cards produto={tirante}/>
                <Cards produto={caneca}/>
            </div>
        </div>
    )  
}  

export default Produtos;