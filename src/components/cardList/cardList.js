import React from 'react';
import './cardList.styles.css';
import Card from '../card/card';

const CardList = props => {
    console.log(props);
    return<div className="card-list">
        {
          props.monsters.map(monster=> (
          <Card key={monster.id} monster={monster}></Card>
          ))
        }
    </div>
}

export default CardList;