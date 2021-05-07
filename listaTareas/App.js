/*
hacer 3 listas de tareas
una de terminadas
otra de pendientes y otra para todas
que cambie de hecha a pendiente con un boton
*/
import "./styles.css";

export default function App() {
  return (
    <div class="container">
    <div class="page-header">
      <h1>Fun Facts About Sharks
        <small>They're Endangered...</small>
      </h1>
    </div>
    <div class="table table-hover" >
      <table class="table table-hover">
        <thead>
          <tr>         
            <th>Species</th>
            <th>Diet</th> 
            <th>Average Length</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Whale Shark</td>
            <td>Plankton</td>
            <td>18 - 32 ft</td>
          </tr>
          <tr>
            <td>Nurse Shark</td>
            <td>Fish, shrimp, squid</td>
            <td>7.5 - 10 ft</td>
          </tr>
          <tr>
            <td>Sand Tiger Shark</td>
            <td>Small fish</td>
            <td>6.5 - 10.5 ft</td>
          </tr>
          <tr>
            <td>Bull Shark</td>
            <td>Fish, dolphins, other sharks</td>
            <td>7 - 11.5 ft</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="panel panel-default">
    <div class="panel-footer">
    Source: http://animals.nationalgeographic.com/animals/sharks/
    </div>
    </div>
    </div>
  );
}
