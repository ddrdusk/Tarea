/*
hacer 3 listas de tareas
una de terminadas
otra de pendientes y otra para todas
que cambie de hecha a pendiente con un boton
*/
import "./styles.css";
import React from 'react';
//import Boton from "./Component/Button"

export default function App() {
  /*state = {
    products: [
      { id: 1, name: "monitor", count: 12 },
      { id: 2, name: "impresora", count: 1 },
      { id: 3, name: "mouse", count: 33 },
      { id: 4, name: "alcohol", count: 0 },
      { id: 5, name: "cap", count: 0 },
    ]
  }*/
  return (
  <div className="container">
    <div className="page-header">
      <h1>Lista de tareas</h1>
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
}//</Boton>
