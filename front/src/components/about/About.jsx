

import React from 'react';
import s from './about.module.css';

export default function () {
  return (
    <div className={s.container}>
        <h1 className={s.nombreTexto}>Bienvenido a la App de Ricky & Morty</h1>    
    <div className={s.containerTexto}>
        <h3>Autor: Bianca Stork by Henry Bootcamp</h3>      
        <span>
       Soy Bianca Stork y he desarrolado esta Aplicacion basada en la Tematica de Rick & Morty, para el BootCamp de Henry <br/>       
        Para el desarrolo de la misma he realizado tanto el Back como el Front, utilizando la API de <a href="https://rickandmortyapi.com/api">Rick and Morty</a>.
          <br />
          <br />
          <h3>TECNOLOGIAS UTILIZADAS:</h3> <ul>Html, CSS, JavaScript, React, Redux, Node.js, Express</ul>
        </span>
        </div>
        <h3>  Gracias por llegar hasta aqui!</h3>
    </div>
        
  )
}

