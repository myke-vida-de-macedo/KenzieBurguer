import Button from "../ButtonMedium"

import { MdOutlineSearch } from 'react-icons/md';

import { SearchStyled } from "./style"

export default function Search(){

    return(
        <SearchStyled>
            <input className="Entrada" type="text" placeholder="Digitar Pesquisa"/>
            <Button type="button" green={true}>
                <MdOutlineSearch/>
            </Button>
        </SearchStyled>
    )
}