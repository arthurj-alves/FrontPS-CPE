import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillHeart } from 'react-icons/ai'
import './Cards.css';

function Cards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.produto.imagem}/>
      <Card.Body>
        <Card.Title>Produto</Card.Title>
        <Card.Text>
            {props.produto.descricao}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
        <h3><AiFillHeart /></h3>
      </Card.Body>
    </Card>
  );
}

export default Cards;



