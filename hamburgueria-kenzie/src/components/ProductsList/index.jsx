import CardProduct from "../CardProduct"

import { ProductListStyled } from "./style"

export default function ProductList({foods, setFoodsCart, setValueCat, filterProducts}){

    return(
        <ProductListStyled>
            {   
                filterProducts == 0 ?
                foods.map( food => <CardProduct key={ food.id } food={ food } setFoodsCart={setFoodsCart} foods={foods} setValueCat={setValueCat}/> )
                :
                filterProducts.map( food => <CardProduct key={ food.id } food={ food } setFoodsCart={setFoodsCart} foods={foods} setValueCat={setValueCat}/> )
            }
        </ProductListStyled>
    )
}