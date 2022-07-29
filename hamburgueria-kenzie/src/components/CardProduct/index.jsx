import ButtonMedium from "../ButtonMedium"
import { CardProductStyled } from "./style"

export default function CardProduct({food}){

    const { img, name, category, price } = food

    return(
        <CardProductStyled>
            <figure className="BlockImage">
                <img className="BlockImage__image" src={img} alt="" />
            </figure>
            <h2 className="tittle">{name}</h2>
            <span className="categoty">{category}</span>
            <span className="value">{`R$ ${ price.toFixed(2) }`}</span>
            <ButtonMedium marginLeft={true} type="button" green={true}>Adicionar</ButtonMedium>
        </CardProductStyled>
    )
}