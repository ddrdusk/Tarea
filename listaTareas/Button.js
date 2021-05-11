//Hacer funciones para el boton y cambiar listas

import React from 'react';
class Boton extends React.Component
{
  handleClick = (tareaId) =>
  {
    this.props.onEliminar(tareaId)
  }
  render()
  {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Pendientes</th>
            <th>Hechas</th> 
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tareas.map( tarea =>
            {
              return(
                <tr>
                  <td key={tarea.id}>{`${tarea.name}`} <button onClick={() => this.handleClick(tarea.id)}>✓</button></td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    )
  }
}
export default Boton;
