import Header from "./components/Header"
import ProductList from "./components/ProductsList";
import Cart from "./components/Cart";

import { useEffect, useState } from "react";

import api from "./services/api.js"

import GlobalStyled from "./styles/global.js"
import './styles/App.css';


function App() {
  
  const [ foods, setFoods ] = useState([])

  useEffect(()=> {

    api.get("/products").then( result => setFoods( result.data ))

  },[])

  const [ foodsCart, setFoodsCart ] = useState(["g"])

  return (
    <>
      <GlobalStyled/>
      <div className="App">
        <Header/>

        <div className="blockStyle">
            <ProductList foods={foods}/>
            <Cart foodsCart={foodsCart}/>
        </div>

      </div>
    </>
  );
}

export default App;
