import React from "react";
import "./Perfil.css"
import Cards from "../../Components/Cards/Cards";


function Perfil() {

    const shoulder = {
        nome: "Shoulder",
        descricao: "Shoulder bag preta masculina",
        precoCheio: "R$120,00",
        precoDesconto :"R$112,00",
        imagem: "./images/shoulder.jpg",
    };

    const bone = {
        nome: "Boné",
        descricao: " Cores em Azul e Preto",
        precoCheio: "R$40,00",
        precoDesconto: "R$36,00",
        imagem: "./images/bone.jpg",
    };

    const bernardo = {
        nome: "Bernardo",
        esportes: "Futvolei e Basquete",
        curso: "Engenharia de Sistemas",
        email: "bernardo@gmail.com",
        imagem: "./images/bernardoPerfilFoto.jpg",
        produtoFav: {shoulder},
    };

    return (
        
                    <div className="card-container">
        
                        <div className="top">
                            <div className="image-container">
                                <img src="./images/bernardoPerfilFoto.jpg" alt="" />
                            </div>
                        </div>
        
                        <div className="bottom">
                            <h1>Bernardo</h1>
                            <h3>Futvolei e Basquete</h3>
                            <div className="subInfos">
                                <h4>Curso: Engenharia de Sistemas</h4>
                                <h4>Email: bernardo@gmail</h4>
                            </div>
                        </div>
                        <div className="ProdutosFavoritos">
                            <h1>Seus produtos favoritos:</h1>
                            <div className="produtosPerfil">
                            <Cards produto={bone}/>
                            <Cards produto={shoulder}/>                  
                            </div>
                        </div>
        
                    </div>
        
        )
    }
    
    export default Perfil;