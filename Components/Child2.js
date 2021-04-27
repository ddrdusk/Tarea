import { Component } from "react";

class Child extends Component{
  
  handleClick = ()=>
  {
    this.props.onEliminar("Eliminate")
  }
  
  frutasEnStock = () => this.props.frutas.filter(fruta => fruta.cantidad > 0).map(fruta => <li>{fruta.nombre}<span onClick{handleClick}>Eliminar!</span></li>)

  frutasSinStock = () => this.props.frutas.filter(fruta => fruta.cantidad === 0).map(fruta => <li>{fruta.nombre}<span onClick{handleClick}>Eliminar!</span></li>)

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
