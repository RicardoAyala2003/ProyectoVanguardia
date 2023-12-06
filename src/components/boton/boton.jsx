import './boton.css'
import React from 'react';


function Boton({ text = 'Aceptar', onClick }) {
    return (
      <button className="custom-button" onClick={onClick}>
        {text}
      </button>
    );
  }

export default Boton;