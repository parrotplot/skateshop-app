import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
  <div className = "App">
    <Navbar />
    <ItemListContainer greeting= "Hola Mundo" />
  </div>
  )
}

export default App;
