import React, { use, useEffect, useState } from 'react';
import Jersey from '../Jersey/Jersey';
import './Jerseys.css'
import { addToStoredCart, getStoreCart } from '../../utilities/localStorage';

const Jerseys = ({handleJerseysData}) => {

    const jerseys = use(handleJerseysData);

    const [cart, setCart] = useState([]);

    useEffect(() =>{

        const storedCartIds = getStoreCart();

        const storedCart = [];

        for(const id of storedCartIds){

            const cartJersey = jerseys.find(jersey => jersey.id === id)

            if(cartJersey) storedCart.push(cartJersey)

        }

        setCart(storedCart);

    }, [jerseys])

    const handleAddToCart = (bottle) =>{
        // console.log('jersey added', bottle);

        const newCart = [...cart, bottle];
        setCart(newCart);

        addToStoredCart(bottle.id);
    }



    return (
        <div>
            <h2>Total Jerseys: {jerseys.length}</h2>
            <h2>added to cart: {cart.length}</h2>
            <div className='jersey-card-container'>
                {
                    jerseys.map(jersey => <Jersey 
                        key = {jersey.id} 
                        handleAddToCart = {handleAddToCart}
                        jersey = {jersey}></Jersey>)
                }
            </div>
        </div>
    );
};

export default Jerseys;