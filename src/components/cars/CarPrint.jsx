import React, {useState}from 'react';
import aston from "./carsImg/aston.png"
import audiR8 from "./carsImg/audir8.png"
import camaro from "./carsImg/camaro.png"
import ferrari from "./carsImg/ferrari2.png"
import lykan from "./carsImg/Lykan.png"
import mercedesAmg from "./carsImg/mercedesAMG2.png"
import porscheGt4 from "./carsImg/PorscheGT4.png" 
import senna from "./carsImg/senna.png" 
import Garaje from "./Garaje.jsx"



/* muestra el auto de portada  */
const CarsVisual = (props) =>{
    const [carState, setCarState]= useState(senna) /* imagen del auto */
    const [nameState, setNameState]= useState("senna") /* nombre del auto */
    const [colorState, setColorState]= useState("black") /* nombre del auto */
    const [velocidadState, setVelocidadState]= useState("55") /* nombre del auto */
    const [frenoState, setFrenoState]= useState("35") /* nombre del auto */
    const [driftState, setDriftState]= useState("10") /* nombre del auto */

    const updateName = (name) => {
        setNameState(name)
    }

    const updateColor = (color) => {
        setColorState(color)
    }
    
    const updateVelocidad = (velocidad) => {
        setVelocidadState(velocidad)
    }
    
    const updateFreno = (freno) => {
        setFrenoState(freno)
    }
    
    const updateDrift = (drift) => {
        setDriftState(drift)
    }



    return(
        <div>
            <div className="statsCars">
                <div className="nameCar">
                    <p>{nameState}</p>
                </div>
                <div className="colorCar">
                    <p>Color: {colorState}</p>
                </div>
                <div className="velocidadCar">
                    <p>Velocidad: {velocidadState}</p>
                </div>
                <div className="frenoCar">
                    <p>Freno: {frenoState}</p>
                </div>
                <div className="driftCar">
                    <p>Drift: {driftState}</p>
                </div>
            </div>
            <div className='carImg'>
                <img src={carState} alt="senna" />
            </div>

            <div className="cuadros">
                <div id='1' className="astonButton cuadroCar" onClick={() => {
                    setCarState(aston)
                    {updateName("Aston Martin Vulcan")};
                    {updateColor("black")};
                    {updateVelocidad("40")};
                    {updateFreno("30")};
                    {updateDrift("30")};
                }}>
                </div>

                <div id='2' className="AudiR8Button cuadroCar"onClick={() => { 
                    setCarState(audiR8);
                    {updateName("Audi R8 v10")};
                    {updateColor("black")};
                    {updateVelocidad("75")};
                    {updateFreno("15")};
                    {updateDrift("10")};
                }}>
                </div>

                <div id='3' className="CamaroButton cuadroCar"onClick={()=>{ 
                    setCarState(camaro);
                    {updateName("Camaro ZL1")}
                    {updateColor("black")}
                    {updateVelocidad("35")}
                    {updateFreno("40")}
                    {updateDrift("25")}
                }}>
                </div>

                <div id='4' className="FerrariButton cuadroCar"onClick={()=>{ 
                    setCarState(ferrari);
                    {updateName("LaFerrari")}
                    {updateColor("black")}
                    {updateVelocidad("45")}
                    {updateFreno("30")}
                    {updateDrift("25")}
                }}>
                </div>

                <div id='5' className="LykanButton cuadroCar"onClick={()=>{ 
                    setCarState(lykan);
                    {updateName("Lycan HyperSport")}
                    {updateColor("black")}
                    {updateVelocidad("50")}
                    {updateFreno("30")}
                    {updateDrift("20")}
                }}>
                </div>

                <div id='6' className="MercedesAmgButton cuadroCar"onClick={()=>{ 
                    setCarState(mercedesAmg);
                    {updateName("Mercedez AMG GT S")}
                    {updateColor("black")}
                    {updateVelocidad("65")}
                    {updateFreno("25")}
                    {updateDrift("10")}
                }}>
                </div>

                <div id='7' className="PorscheGt4Button cuadroCar"onClick={()=>{ 
                    setCarState(porscheGt4);
                    {updateName("Porsche 718 Cayman GT4")}
                    {updateColor("black")}
                    {updateVelocidad("70")}
                    {updateFreno("10")}
                    {updateDrift("20")}
                }}>
                </div>

                <div id='8' className="SennaButton cuadroCar"onClick={()=>{ 
                    setCarState(senna);
                    {updateName("Mclaren Senna")}
                    {updateColor("black")}
                    {updateVelocidad("55")}
                    {updateFreno("35")}
                    {updateDrift("10")}
                }}>
                </div>

            </div>
        </div>
    )
}




export default CarsVisual