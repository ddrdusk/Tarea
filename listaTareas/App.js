/*
hacer 3 listas de tareas
una de terminadas
otra de pendientes y otra para todas
que cambie de hecha a pendiente con un boton
*/
import "./styles.css";

export default function App() {
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
}
