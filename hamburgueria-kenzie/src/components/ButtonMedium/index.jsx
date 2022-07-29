import { ButtonStyled } from "./style"

export default function ButtonMedium({type, children, green}){

    return(
        <ButtonStyled type={type} green={green}>
            {children}
        </ButtonStyled>
    )
}