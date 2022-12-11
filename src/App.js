import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {

  const [activePage, setActivePage] = useState('Home')

  return (
  <div className = "App">
    <Navbar
      funcionParaCambiarPagina={setActivePage}
    />
     {/* TODO: Create Home Component  */}
    { activePage == 'Home' &&
     <div>Homepage</div>
    }
    {(activePage == 'Decks' || activePage == 'Trucks' || activePage == 'Wheels' || activePage == 'Accessories') &&
      <ItemListContainer productsToList={activePage} />
    }
     {/* ============ */}
  </div>
  )
}

export default App;
