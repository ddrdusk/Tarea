import { Component } from "react";

class Child extends Component{
  
  frutasEnStock = () => this.props.frutas.filter(fruta => fruta.cantidad > 0).map(fruta => <li>{fruta.nombre}<span onClick{this.props.onEliminar}>Eliminar!</span></li>) /*pone un span o algo*/

  frutasSinStock = () => this.props.frutas.filter(fruta => fruta.cantidad === 0).map(fruta => <li>{fruta.nombre}</li>)

  render() {
    return(
      <div>
        <h1>
          Frutas en stock
        </h1>

        <ul>
          {this.frutasEnStock()}
        </ul>

        <h1>
          Frutas sin stock
        </h1>

        <ul>
          {this.frutasSinStock()}
        </ul>


      </div>
    )
  }

}

export default Child;
