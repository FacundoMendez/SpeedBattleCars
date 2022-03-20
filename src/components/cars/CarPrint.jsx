import React from 'react';
/* import aston from "./carsImg/aston.png"
import audiR8 from "./carsImg/audir8.png"
import camaro from "./carsImg/camaro.png"
import ferrari from "./carsImg/ferrari.png"
import lykan from "./carsImg/Lykan.png"
import mercedesAmg from "./carsImg/mercedesAMG2.png"
import porscheGt4 from "./carsImg/PorscheGT4.png" */
import senna from "./carsImg/senna.png" 





/* muestra el auto de portada  */
const CarsVisual = (props) =>{
    /* console.log(cars.id) */
    return(
        <div className='carImg'>
            <img src={senna} alt="senna" />
        </div>

    )
}


/* crea los recuadros de los autos (botones) */
function CuadrosCars(){
    return(
        <div className="cuadros">
            <div id='1' className="astonButton cuadroCar" onClick={()=>{}}></div>

            <div id='2' className="AudiR8Button cuadroCar"onClick={()=>{}}></div>

            <div id='3' className="CamaroButton cuadroCar"onClick={()=>{}}></div>

            <div id='4' className="FerrariButton cuadroCar"onClick={()=>{}}></div>

            <div id='5' className="LykanButton cuadroCar"onClick={()=>{}}></div>

            <div id='6' className="MercedesAmgButton cuadroCar"onClick={()=>{}}></div>

            <div id='7' className="PorscheGt4Button cuadroCar"onClick={()=>{}}></div>

            <div id='8' className="SennaButton cuadroCar"onClick={()=>{}}></div>

        </div>
    )
}


export { CuadrosCars,CarsVisual}