import React, {useState}from 'react';
import aston from "./carsImg/aston.png"
import audiR8 from "./carsImg/audir8.png"
import camaro from "./carsImg/camaro.png"
import ferrari from "./carsImg/ferrari2.png"
import lykan from "./carsImg/Lykan.png"
import mercedesAmg from "./carsImg/mercedesAMG2.png"
import porscheGt4 from "./carsImg/PorscheGT4.png" 
import senna from "./carsImg/senna.png" 

const CarHandler = () =>{
    
}


/* muestra el auto de portada  */
const CarsVisual = (props) =>{
    const [carState, setCarState]= useState(senna)

    return(
        <div>
            <div className='carImg'>
                <img src={carState} alt="senna" />
            </div>
            <div className="cuadros">
                <div id='1' className="astonButton cuadroCar" onClick={() => {setCarState(aston)}}></div>
                <div id='2' className="AudiR8Button cuadroCar"onClick={()=>{ setCarState(audiR8)}}></div>
                <div id='3' className="CamaroButton cuadroCar"onClick={()=>{setCarState(camaro)}}></div>
                <div id='4' className="FerrariButton cuadroCar"onClick={()=>{setCarState(ferrari)}}></div>
                <div id='5' className="LykanButton cuadroCar"onClick={()=>{setCarState(lykan)}}></div>
                <div id='6' className="MercedesAmgButton cuadroCar"onClick={()=>{setCarState(mercedesAmg)}}></div>
                <div id='7' className="PorscheGt4Button cuadroCar"onClick={()=>{setCarState(porscheGt4)}}></div>
                <div id='8' className="SennaButton cuadroCar"onClick={()=>{setCarState(senna)}}></div>
            </div>
        </div>
    )
}




export default CarsVisual