import Search from "../Search"
import Logo from "../Logo"

import { HeaderStyled } from "./style.js"

export default function Header({foods, setFilterProducts}){

    return(
        <HeaderStyled>
            <Logo/>
            <Search foods={foods} setFilterProducts={setFilterProducts}/>
        </HeaderStyled>
    )
}