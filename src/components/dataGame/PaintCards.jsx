import React from 'react';
import img1 from "./img/img1.jpeg"

const PaintCards=(props)=>{
    console.log(props.id)
    return (
        <div className='cardsObj'>
            <img id={props.id} src={props.img} alt="img card"></img>
            <p>{props.descripcion}</p>
        </div>
    )    
}

export default PaintCards