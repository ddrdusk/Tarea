/*
  1 manejar los componentes name y count
  2 agregar nuevos productos (ID dinamica)
  3 separar form a nuevo componenete
*/
import logo from './logo.svg';
import './App.css';
import ProductsList from "./components/ProductsList";
import React from 'react';
class App extends React.Component
{
  state = {
    products: [
      { id: 1, name: "monitor", count: 12 },
      { id: 2, name: "impresora", count: 1 },
      { id: 3, name: "mouse", count: 33 },
      { id: 4, name: "alcohol", count: 0 },
      { id: 5, name: "cap", count: 0 },
    ],
    name: 'hola',
    count: 0
  }
  handleEliminar = (productId) => 
  {
    const newProductsList = this.state.products.filter( (product) =>
       product.id != productId )
    this.setState({
      products: newProductsList
    })
  }
  handleSubmit = (event) =>
  {
    event.preventDefault();
    console.log("submit");
  }
  handleCancel = () =>
  {
    this.setState({
      name: '',
      count: 0
    })
  }
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <h3>Todos los productos</h3>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.name}
                onChange={(event) => this.setState({name: event.target.value})}
                placeholder="name"/>
              <input
                type="number"
                value={this.state.count}
                placeholder="count"/>
              <button type="button" onClick={this.handleCancel}>Cancelar</button>
              <button type="submit">Agregar</button>
            </form>
            <ProductsList products={this.state.products} onEliminar={this.handleEliminar}/>
            {/* <h4>Productos sin stock</h4>
            <ProductsList products={this.state.products.filter( (product) => product.count <= 0 )} />
            <h4>Productos con stock</h4>
            <ProductsList products={this.state.products.filter( (product) => product.count > 0 )} /> */}
          </header>
        </div>
  );
  }
}
export default App;
