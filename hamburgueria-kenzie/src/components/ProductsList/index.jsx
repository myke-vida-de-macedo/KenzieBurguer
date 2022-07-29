import CardProduct from "../CardProduct"

import { ProductListStyled } from "./style"

export default function ProductList({foods}){

    return(
        <ProductListStyled>
            {
                foods.map( food => <CardProduct key={ food.id } food={ food }/> )
            }
        </ProductListStyled>
    )
}