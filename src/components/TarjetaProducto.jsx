import React from 'react';

const TarjetaProducto = ({ nombre, precio, descripcion }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p><strong>Precio:</strong> ${precio}</p>
    </div>
  );
};

export default TarjetaProducto;