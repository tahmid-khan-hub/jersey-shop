import React, { use } from 'react';
import Jersey from '../Jersey/Jersey';
import './Jerseys.css'

const Jerseys = ({handleJerseysData}) => {

    const jerseys = use(handleJerseysData);



    return (
        <div>
            <h2>Total Jerseys: {jerseys.length}</h2>
            <div className='jersey-card-container'>
                {
                    jerseys.map(jersey => <Jersey key = {jersey.id} jersey = {jersey}></Jersey>)
                }
            </div>
        </div>
    );
};

export default Jerseys;