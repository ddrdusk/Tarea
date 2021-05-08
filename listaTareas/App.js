/*
hacer 3 listas de tareas
una de terminadas
otra de pendientes y otra para todas
que cambie de hecha a pendiente con un boton
*/
import "./styles.css";
import React from 'react';
//import Boton from "./Component/Button"
//class App extends React.Component
//{

export default function App() {
  /*state = {
    tareas: [
      { id: 1, name: "lavar platos",},
      { id: 2, name: "trapear piso",},
      { id: 3, name: "programar una lista",},
      { id: 4, name: "comprar comida",},
      { id: 5, name: "hacer la cama",},
    ]
  }
  handleEliminar = (tareaId) => 
  {
    const newBoton = this.state.tareas.filter( (tarea) =>
       tarea.id !== tareaId )
    this.setState({
      tareas: newBoton
    })
  }*/
  //render(){
    return (
      <div className="container">
        <div className="page-header">
          <h1>Lista de Tareas</h1>
        </div>
        <div className="table table-hover" >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Pendientes</th>
                <th>Hechas</th> 
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>a</td>
                <td>a</td>
                <td>a</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  //}
}//<Boton tareas={this.state.tareas} onEliminar={this.handleEliminar}/>
//export default App;
