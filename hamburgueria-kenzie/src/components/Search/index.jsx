import Button from "../ButtonMedium"

import { MdOutlineSearch } from 'react-icons/md';

import { SearchStyled } from "./style"

export default function Search({foods, setFilterProducts}){

    const takeNames = ( { target:{ value:search } }  ) => {

        const productsFilter = foods.filter( ( product ) => product.category.toLowerCase().includes( search.toLowerCase() ) 
                                                                || 
                                                            product.name.toLowerCase().includes( search.toLowerCase() ) )

        setFilterProducts( productsFilter )
    }   

    return(
        <SearchStyled>
            <input onChange={ takeNames } className="Entrada" type="text" placeholder="Digitar Pesquisa"/>
            <Button type="button" green={true}>
                <MdOutlineSearch/>
            </Button>
        </SearchStyled>
    )
}