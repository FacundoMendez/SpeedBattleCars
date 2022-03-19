import React from 'react';

function CarPrint(props){
    return(
        <div className='name'>
            <h3>nombre: {props.nombre}</h3>
            <h3>color: {props.color}</h3>
            <h4>Velocidad: {props.velocidad}</h4>
            <h4>Drift: {props.drift}</h4>
            <img src={props.img} alt="Aston" /> 
        </div>
    )
}

export default CarPrint;

