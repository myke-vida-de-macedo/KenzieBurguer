import { ButtonLargeStyled } from "./style"

export default function ButtonLarge({ children, onClick, type }){

    return(
        <ButtonLargeStyled onClick={onClick} type={type}>
            { children }
        </ButtonLargeStyled>
    )
}