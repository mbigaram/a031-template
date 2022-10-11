import React from "react"
import "./Carros.css";



export  function Carros(){
    const modelo = "Mustang"
    const cor = "preto"
    const ano = "1978"
    const flex = "não"

    return(
        <>
        <h2 id="carros">{modelo}</h2>
        <ul>
            <li>Cor: {cor}</li>
            <li>Ano: {ano}</li>
            <li>Flex: {flex}</li>
        </ul>
        </>
    )
}