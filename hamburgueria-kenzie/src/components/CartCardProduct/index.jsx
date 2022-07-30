import { CartCardProductStyled } from "./style"

export default function CartCardProduct({ food:{ id, category, img, name }, setFoodsCart, setValueCat }){

    const removeProduct = ( { target:{ id } } ) => {

        setFoodsCart( ( products ) => {

            const valueProcuct = products.find( product => product.id == id ).price

            console.log( valueProcuct  )

            setValueCat( ( values ) => values - ( valueProcuct/2 ))

            return products.filter( product => product.id != id )
        })

    }

    return(
        <CartCardProductStyled>
            <figure className="blockImage">
                <img className="blockImage__image" src={img} alt={name} />
            </figure>
            <div className="blockInformation">
                <h3 className="blockInformation__name">{name}</h3>
                <span className="blockInformation__category">{category}</span>
            </div>
            <button onClick={removeProduct} id={id} className="button" type="button">Remove</button>
        </CartCardProductStyled>
    )
}