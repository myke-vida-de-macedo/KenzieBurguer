import { ButtonStyled } from "./style"

export default function ButtonMedium({id, type, children, green, marginLeft, onClick}){

    return(
        <ButtonStyled id={id} onClick={onClick} marginLeft={marginLeft} type={type} green={green}>
            {children}
        </ButtonStyled>
    )
}