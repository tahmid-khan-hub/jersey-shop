import React from 'react';
import './Jersey.css'

const Jersey = ({jersey, handleAddToCart}) => {
    console.log(jersey);

    const {image, team, price, ratings, quantity} = jersey;

    return (
        <div className='jersey-card'>
            <img src={image} alt=''/>
            <h2>{team}</h2>
            <p>price: ${price}</p>
            <p>ratings: {ratings}</p>
            <h3>Available: {quantity}</h3>
            {/* <p id='sizes'>sizes: {sizes}</p> */}
            <button onClick={()=> handleAddToCart(jersey)}>Buy Now</button>
        </div>
    );
};

export default Jersey;