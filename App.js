import "./styles.css";
import Child from "./Components/Child"

export default function App() {
  const frutas = [
    {
      nombre: "Banana",
      cantidad: 10
    },
    {
      nombre: "Manzana",
      cantidad: 0
    },
    {
      nombre: "Naranja",
      cantidad: 5
    },
    {
      nombre: "Anana",
      cantidad: 0
    }
  ];
  return (
    <div className="App">
      <Child frutas = {frutas}/>
    </div>
  )
}
