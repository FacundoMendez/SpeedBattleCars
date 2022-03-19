import React from 'react';
/* import aston from "./carsImg/aston.png"
import audiR8 from "./carsImg/audir8.png"
import camaro from "./carsImg/camaro.png"
import ferrari from "./carsImg/ferrari.png"
import lykan from "./carsImg/Lykan.png"
import mercedesAmg from "./carsImg/mercedesAMG2.png"
import porscheGt4 from "./carsImg/PorscheGT4.png"
import senna from "./carsImg/senna.png" */


class Car{
    constructor(id, nombre, color, velocidad, freno, drift){
        this.id = id;
        this.nombre= nombre;
        this.color= color;
        this.velocidad = velocidad; /* 1- 100 */
        this.freno = freno;  /* 1- 100 */
        this.drift = drift;  /* 1- 100 */
    }
}

const models =[];

models.push(new Car(1, "Aston", "black", 40 , 30 , 30 ));
models.push(new Car(2, "AudiR8", "black", 75 , 15 , 10 ));
models.push(new Car(3, "Camaro", "black", 35 , 40 , 25 ));
models.push(new Car(4, "Ferrari", "black", 45 , 30 , 25 ));
models.push(new Car(5, "Lykan", "black", 50 , 30 , 20 ));
models.push(new Car(6, "MercedesAmg", "black", 65 , 25 , 10 ));
models.push(new Car(7, "PorscheGt4", "black", 70 , 10 , 20 ));
models.push(new Car(8, "Senna", "black", 55 , 35 , 10 ));


export default models;


