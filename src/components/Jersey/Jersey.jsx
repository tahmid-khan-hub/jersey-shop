import React from 'react';
import './Jersey.css'

const Jersey = ({jersey}) => {
    console.log(jersey);

    const {image, team, price, ratings, sizes, quantity} = jersey;

    return (
        <div className='jersey-card'>
            <img src={image} alt=''/>
            <h2>{team}</h2>
            <p>price: ${price}</p>
            <p>ratings: {ratings}</p>
            <h3>Available: {quantity}</h3>
            {/* <p id='sizes'>sizes: {sizes}</p> */}
            <button>Buy Now</button>
        </div>
    );
};

export default Jersey;