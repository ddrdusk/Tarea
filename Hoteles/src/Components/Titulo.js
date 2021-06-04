// cambiar letras a strings
import React from 'react';
class Titulo extends React.Component
{
  render()
    {
      return (
        <div className="container">
          <h1 className="title">Hoteles</h1>
          <h2 className="subtitle">
            desde el <strong>dddd, DD de mmmm de AAAA</strong> hasta el <strong>dddd, DD de mmmm de AAAA</strong>
          </h2>
        </div>
      )
    }
  }
export default Titulo;
