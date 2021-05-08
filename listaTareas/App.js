/*
hacer 3 listas de tareas
una de terminadas
otra de pendientes y otra para todas
que cambie de hecha a pendiente con un boton
*/
import "./styles.css";
import React from 'react';
import Boton from "./Component/Button"
class App extends React.Component
{
  state = {
    tareas: [
      { id: 1, name: "Lavar platos",},
      { id: 2, name: "Trapear piso",},
      { id: 3, name: "Programar una lista",},
      { id: 4, name: "Comprar comida",},
      { id: 5, name: "Hacer la cama",},
    ]
  }
  render(){
    return (
      <div className="App">
        <div className="page-header">
          <h1>Lista de Tareas</h1>
        </div>
        <div className="table table-hover" >
        <Boton tareas={this.state.tareas}/>
        </div>
      </div>
    );
  }
}
export default App;
