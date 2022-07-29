import { ButtonStyled } from "./style"

export default function ButtonMedium({type, children, green, marginLeft}){

    return(
        <ButtonStyled marginLeft={marginLeft} type={type} green={green}>
            {children}
        </ButtonStyled>
    )
}