import React, { useState, useEffect } from 'react';

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:3000/pizza/read')
      .then(response => response.json())
      .then(data => {setPizzas(data);console.log(data) })
   
      
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {pizzas.map((pizza, index) => (
          <tr key={index}>
            <td>{pizza.nombre}</td>
            <td>{pizza.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Pizzas;