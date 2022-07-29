import Search from "../Search"
import Logo from "../Logo"

import { HeaderStyled } from "./style.js"

export default function Header(){

    return(
        <HeaderStyled>
            <Logo/>
            <Search/>
        </HeaderStyled>
    )
}