import React from "react";
import Titulo from "./Titulo";


export const BigCard = ({ejecutar})=>{

    let sumar = 10

    return(
    <>
    <Titulo texto="soy un Titulo de Big Card" subtitulo="Soy subtitulo de Big Card"/>
    <div>Esta es una Seccion</div>
    <button onClick={ejecutar}>SALUDAR + {sumar++}</button>
    

    </>
    )

}

export default BigCard