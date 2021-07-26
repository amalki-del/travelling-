
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img from  '../images/img-home.jpg'


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              source='https://i.ibb.co/t8251K1/img.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              source={"https://i.ibb.co/kxcvn9s/img-3.jpg"}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
       
        </div>
      </div>
    </div>
  );
}

export default Cards;