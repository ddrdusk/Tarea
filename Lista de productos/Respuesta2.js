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
    <ol id= "borrar">
    {this.props.products.map( product => {
      return (
      <li key={product.id}>{`nombre: ${product.name} - cantidad: ${product.count}`} <span onClick={this.handleClick}>[Eliminar!!]</span></li>
      //tenia que hacer una funcion aca
      )
    }
    )}
    </ol>
    )
  }
  
}
export default ProductsList;