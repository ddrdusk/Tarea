import './styles.css';
import ProductsList from "./Components/ProductsList";
import React from 'react';
class App extends React.Component{
  state = {
    products: [
      { id: 1, name: "monitor", count: 12 },
      { id: 2, name: "impresora", count: 1 },
      { id: 3, name: "mouse", count: 33 },
      { id: 4, name: "alcohol", count: 0 },
      { id: 5, name: "cap", count: 0 },
    ]
  }
  handleEliminar = (productId) => 
  {
    const newProductsList = this.state.products.filter( function (product) => product.id !== product.id)
    this.setState({
      products: newProductsList
    })
  }
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <h3>Todos los productos</h3>
            <ProductsList  products={this.state.products} onEliminar={(mensaje)=> alert(mensaje)} class="mystyle"/>
        //me olvide de escribir aca
            {/* <h4>Productos sin stock</h4>
            <ProductsList products={this.state.products.filter( (product) => product.count <= 0 )} />
            <h4>Productos con stock</h4>
            <ProductsList products={this.state.products.filter( (product) => product.count > 0 )} /> */}
          </header>
        </div>
  );
  }
};
export default App;