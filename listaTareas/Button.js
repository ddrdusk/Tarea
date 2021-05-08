//Hacer funciones para el boton y cambiar listas

import React from 'react';
class Boton extends React.Component
{
  handleClick = () =>
  {
    var element = document.getElementById("lista");
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
                  <td key={tarea.id} id="lista"/*tareas={this.state.tareas.filter( (tarea) => tarea.class !== "pendiente" )}*/>{`${tarea.name}`} <button onClick={() => this.handleClick(tarea.id)}>✓</button></td>
                  <td key={tarea.id} id="lista"/*tareas={this.state.tareas.filter( (tarea) => tarea.class !== "pendiente" )}*/>{`${tarea.name}`} <button onClick={() => this.handleClick(tarea.id)}>✗</button></td>
                  <td key={tarea.id}>{`${tarea.name}`}</td>
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
