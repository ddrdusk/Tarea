import React from 'react';
class ProductsList extends React.Component
{

  handleClick = () =>
  {
    this.props.onEliminar("eliminate")
    var element = document.getElementById("borrar");
    element.classList.toggle("mystyle");
  }
  render()
  {
    return (
    <ol id= "borrar">
    {this.props.products.map( product => {
      return (
      <li key={product.id}>{`nombre: ${product.name} - cantidad: ${product.count}`} <span onClick={this.handleClick}>[Eliminar!!]</span></li>
      )
    }
    )}
    </ol>
    )
  }
  /*delete = itemId => {
  //En vez de usar item.id, usa la propiedad
  //que te ayuda a identificar tu objeto que quieres borrar.
  //Quizas clavearticulo sea la adecuada.
  const filtredData = this.state.items.filter(item => item.id !== itemId);
  this.setState({ items: filtredData });
};
<button onClick={() => this.delete(item.id)}>Eliminar</button>*/
}
export default ProductsList;
