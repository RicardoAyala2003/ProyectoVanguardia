import React, { useState } from 'react';
import './form.css';
import Boton from "../boton/boton";

function Form() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Correo:
          <input
            type="text"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <Boton></Boton>
      </form>
    </div>
  );
}

export default Form;