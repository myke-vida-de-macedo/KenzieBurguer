import img from "../../assets/logo.svg"

import { LogoStyled } from "./style"

export default function Logo(){

    return(
        <LogoStyled>
            <img className="logo" src={img} alt="Burger King" />
        </LogoStyled>
    )
}