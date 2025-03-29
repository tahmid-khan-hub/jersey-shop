import React from 'react';
import './Jersey.css'

const Jersey = ({jersey}) => {
    console.log(jersey);

    const {image} = jersey;

    return (
        <div className='jersey-card'>
            <img src={image} alt=''/>
        </div>
    );
};

export default Jersey;