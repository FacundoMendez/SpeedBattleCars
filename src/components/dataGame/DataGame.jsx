import React, {useState}from 'react';
import PaintCards from './PaintCards';
import img1 from "./img/img1.jpeg";

const DataCars = () => {
    const [cardsState, setCardsState]= useState(
        [{
            id:"1",
            img:img1 ,
            descripcion:"Container 1" ,
            
        },
        {
            id:"2",
            img:img1 ,
            descripcion:"Container 2" ,
    
        },
        {
            id:"3",
            img:img1 ,
            descripcion:"Container 3" ,
    
        },
        {
            id:"4",
            img:img1 ,
            descripcion:"Container 4" ,
    
        },
        {
            id:"5",
            img:img1 ,
            descripcion:"Container 5" ,
    
        },
        {
            id:"6",
            img:img1,
            descripcion:"Container 6" ,
        }
    ]);

    console.log(cardsState)
    return (
        /* APLICANDO MAP */
        <div className='container2Cards'>
            {cardsState.map(elem => {
                return(
                    <PaintCards key={elem.id} img={elem.img} descripcion={elem.descripcion} />
                )}
            )}
        </div>
        
    )
}


export default DataCars