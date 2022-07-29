import Header from "./components/Header"
import ProductList from "./components/ProductsList";

import { useEffect, useState } from "react";

import api from "./services/api.js"

import GlobalStyled from "./styles/global.js"
import './styles/App.css';


function App() {
  
  const [ foods, setFoods ] = useState([])

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
        </div>

      </div>
    </>
  );
}

export default App;
