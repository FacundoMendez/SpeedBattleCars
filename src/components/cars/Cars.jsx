/* import React from 'react'; */
import aston from "./carsImg/aston.png"
import audiR8 from "./carsImg/audir8.png"
import camaro from "./carsImg/camaro.png"
import ferrari from "./carsImg/ferrari.png"
import lykan from "./carsImg/Lykan.png"
import mercedesAmg from "./carsImg/mercedesAMG2.png"
import porscheGt4 from "./carsImg/PorscheGT4.png"
import senna from "./carsImg/senna.png" 

class Car{
    constructor(id, nombre, color, velocidad, freno, drift, img){
        this.id = id;
        this.nombre= nombre;
        this.color= color;
        this.velocidad = velocidad; /* 1- 100 */
        this.freno = freno;  /* 1- 100 */
        this.drift = drift;  /* 1- 100 */
        this.img = img;
    }
}

const Models =[];

Models.push(new Car(1, "Aston", "black", 40 , 30 , 30, aston ));
Models.push(new Car(2, "AudiR8", "black", 75 , 15 , 10,audiR8));
Models.push(new Car(3, "Camaro", "black", 35 , 40 , 25,camaro));
Models.push(new Car(4, "Ferrari", "black", 45 , 30 , 25,ferrari));
Models.push(new Car(5, "Lykan", "black", 50 , 30 , 20,lykan ));
Models.push(new Car(6, "MercedesAmg", "black", 65 , 25 , 10,mercedesAmg ));
Models.push(new Car(7, "PorscheGt4", "black", 70 , 10 , 20,porscheGt4 ));
Models.push(new Car(8, "Senna", "black", 55 , 35 , 10, senna ));


export default Models;


