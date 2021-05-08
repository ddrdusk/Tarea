//Hacer funciones para el boton y cambiar listas

import React from 'react';
class Boton extends React.Component
{
  handleClick = () =>
  {
    this.props.onEliminar("eliminate")
    var element = document.getElementById("borrar");
    element.classList.toggle("pendiente");
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
                  <td key={tarea.id}/*tareas={this.state.tareas.filter( (tarea) => tarea.class !== "pendiente" )}*/>{`nombre: ${tarea.name}`} <button onClick={() => this.handleClick(tarea.id)}>a</button></td>
                  <td key={tarea.id}/*tareas={this.state.tareas.filter( (tarea) => tarea.class !== "pendiente" )}*/>{`nombre: ${tarea.name}`} <button onClick={() => this.handleClick(tarea.id)}>a</button></td>
                  <td key={tarea.id}>{`nombre: ${tarea.name}`} <button onClick={() => this.handleClick(tarea.id)}>a</button></td>
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
