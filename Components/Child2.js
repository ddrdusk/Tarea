import React from 'react';
class ProductsList extends React.Component
{
    
  handleClick = () =>
  {
    this.props.onEliminar("eliminate")
  }
  render()
  {
    return (
    <ol>
    {this.props.products.map( product => {
      return (
      <li key={product.id}>{`nombre: ${product.name} - cantidad: ${product.count}`} <span onClick={this.handleClick}>[Eliminar!!]</span></li>
      )
    }
    )}
    </ol>
    )
  }
    /*import React from "react";

export default class App extends React.Component {
  state = {
    items: [
      { id: 1, title: "Titulo" },
      { id: 2, title: "Titulo" },
      { id: 3, title: "Titulo" }
    ]
  };

  delete = itemId => {
    //En vez de uasr item.id, usa la propiedad
    //que te ayuda a identificar tu objeto que quieres borrar.
    //Quizas clavearticulo sea la adecuada.
    const filtredData = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: filtredData });
  };

  render() {
    return (
      <table style={{ width: "100%", textAlign: "center" }}>
        <tr>
          <th># -</th>
          <th>Titulo</th>
          <th>Acción</th>
        </tr>
        {this.state.items.map((item, key) => (
          <tr key={key}>
            <td>{item.id}</td>
            <td>{item.title + item.id}</td>
            <td>
              <button onClick={() => this.delete(item.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}*/
}
export default ProductsList;
