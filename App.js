import React, { useState } from "react";
import Item from "./Components/Item";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function App() {
  const [products, setProducts] = useState([]);
  const [C_items, setCItems] = useState([]);
  const [Total,setTotal]=useState(0);
  fetch("http://demo8159773.mockable.io/items")
    .then((res) => res.json())
    .then((json) => {
      setProducts(json);
  });
  function addItem(id) {
    setTotal(function(oldTotal)
    {
      console.log(oldTotal);
      return oldTotal+products[id-1].Price;
    })
    setCItems(function (olditems) {
      return [...olditems, id];
    });
  }
  return (
    <div>
      <Router>
          <Routes>
                <Route exact path="/" element={<Item products={products} onSelect={addItem} />}></Route>
                <Route exact path="/cart" element={<Cart cart={C_items} products={products} total={Total}/>}></Route>
                <Route exact path="/contact" element={<Contact/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
