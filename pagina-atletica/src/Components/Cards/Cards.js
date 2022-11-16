import React from 'react';
import { useState } from 'react';
/* import { AiFillHeart } from 'react-icons/ai' */
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { HeartFilled, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import 'antd/dist/antd.css';
import './Cards.css';
import Meta from 'antd/lib/card/Meta';


function Cards(props) {

  const [favorito, setFavorito] = useState(false);


  function handleFavorito(){
    setFavorito((prev)=>!prev);
  }


  return (


    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="imagemProduto"
          src={props.produto.imagem}
        />
      }
      actions={[
        <ShoppingCartOutlined key="comprar" onClick={() => console.log("deubom")}/>,
        favorito ?  <HeartFilled key="favoritarTrue" onClick={handleFavorito}/> : <HeartOutlined key="favoritarFalse" onClick={handleFavorito}/>

      ]
      }
    >
      <Meta
        /* avatar={<Avatar src='./images/LogoAtlética.png' />} */
        title={props.produto.nome}
        description={props.produto.descricao}
      /* description={props.produto.preco} */
      />
      <br />
      <div className='precos'>
        <p className='precoDesconto'>{props.produto.precoDesconto}</p>
        <p className='precoCheio'>{props.produto.precoCheio}</p>
      </div>
    </Card >
  );
}

export default Cards;

