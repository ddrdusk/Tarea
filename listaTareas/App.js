/*
hacer 3 listas de tareas
una de terminadas
otra de pendientes y otra para todas
que cambie de hecha a pendiente con un boton
si una lista se vacia hacer que sea una sola lista
*/
import "./styles.css";
import React from 'react';
import Boton from "./Component/Button"
class App extends React.Component
{
  state = {
    tareas: [
      { id: 1, name: "Lavar platos", state:"hecho",},
      { id: 2, name: "Trapear piso", state:"hecho",},
      { id: 3, name: "Programar una lista", state:"pendiente",},
      { id: 4, name: "Comprar comida", state:"pendiente",},
      { id: 5, name: "Hacer la cama", state:"pendiente",},
    ]
  }
  handleEliminar = (tareaId) => 
  {
    const newBoton = this.state.tareas.filter( (tarea) =>
    tarea.id !== tareaId )
    this.setState({
      tareas: newBoton
    })
  }
  render(){
    return (
      <div className="App">
        <div className="page-header">
          <h1>Lista de Tareas</h1>
        </div>
        <div className="table table-hover" >
          <Boton tareas={this.state.tareas.filter( (tarea) => tarea.state ==="pendiente")} onEliminar={this.handleEliminar}/>
        </div>
      </div>
    );
  }
}
export default App;
