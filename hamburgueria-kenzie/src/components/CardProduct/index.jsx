import ButtonMedium from "../ButtonMedium"
import { CardProductStyled } from "./style"

export default function CardProduct({food:{ id, img, name, category, price }, setFoodsCart, foods, setValueCat}){

    const takeProducr = ( { target:{ id } } ) => {
        
        const produtct = foods.find( ( produtct ) => produtct.id === Number( id ) )

        setFoodsCart( ( cartProducts ) => {

            const naoExiste = !cartProducts.some( ( produtct ) => produtct.id === Number( id ) )

            if( naoExiste ){

                setValueCat( value => value + ( produtct.price / 2 ))

                return [...cartProducts, produtct ]
            }

            return cartProducts
        })
        
    }

    return(
        <CardProductStyled>
            <figure className="BlockImage">
                <img className="BlockImage__image" src={img} alt="" />
            </figure>
            <h2 className="tittle">{name}</h2>
            <span className="categoty">{category}</span>
            <span className="value">{`R$ ${ price.toFixed(2) }`}</span>
            <ButtonMedium  id={id} onClick={takeProducr} marginLeft={true} type="button" green={true}>Adicionar</ButtonMedium>
        </CardProductStyled>
    )
}