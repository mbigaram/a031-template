import React from "react"
import {Carros} from "./Carros"



export default function Garagem(){
    const nome = "Marcelo"

    return(
        <>
        <h1>Garagem de {nome}</h1>
        <Carros/>
        <Carros/>
        <Carros/>
        <Carros/>
        </>
    )
}