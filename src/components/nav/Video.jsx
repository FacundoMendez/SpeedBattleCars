import React from 'react';
import videoBanner from "./img/banner.mp4"

function Video({}){
    console.log()

    return(
        <video  autoPlay loop muted>
            <source src={videoBanner} type="video/mp4" ></source>
        </video>

    )
}


export default Video

