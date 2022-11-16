import React from "react";
import "./Perfil.css"
import Cards from "../../Components/Cards/Cards";
import { getUserID } from "../../Services/auth";


function Perfil(props) {
    
    console.log(getUserID());
    
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        api.get(`/favorito/${getUserID()}`).then((response) => {
            console.log(response.data)
            setProdutos( response.data );
    
          });
    }, [])

    return (
        
                    <div className="perfil-container">
        
                        <div className="top">
                            <div className="image-container">
                                <img src="./images/bernardoPerfilFoto.jpg" alt="" />
                            </div>
                        </div>
        
                        <div className="bottom">
                            <h1>Bernardo</h1>
                            <h3>{props.}</h3>
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