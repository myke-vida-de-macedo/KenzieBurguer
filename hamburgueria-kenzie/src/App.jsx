import Header from "./components/Header"
import ProductList from "./components/ProductsList";
import Cart from "./components/Cart";

import { useEffect, useState } from "react";

import api from "./services/api.js"

import GlobalStyled from "./styles/global.js"
import './styles/App.css';


function App() {
  
  const [ foods, setFoods ] = useState([])
  const [ foodsCart, setFoodsCart ] = useState([])
  const [ valueCat, setValueCat ]= useState(0)

  useEffect(()=> {

    api.get("/products").then( result => setFoods( result.data ))

  },[])

  return (
    <>
      <GlobalStyled/>
      <div className="App">
        <Header/>

        <div className="blockStyle">
            <ProductList foods={foods}/>
            <Cart valueCat={valueCat} foodsCart={foodsCart}/>
        </div>

      </div>
    </>
  );
}

export default App;
