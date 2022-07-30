import ButtonLarge from "../ButtonLarge"
import CartCardProduct from "../CartCardProduct"

import { CartStyled } from "./style"

export default function Cart({ foodsCart, valueCat, setFoodsCart, setValueCat }){
    
    return(
        <CartStyled foodsCart={foodsCart}>
            <div className="header">
                <h2 className="header__tittle">Carrinho de compras</h2>
            </div>
            <section className="products">
                {
                    foodsCart == 0?
                        <>
                            <h3 className="products__tittle">Sua sacola está vazia</h3>
                            <span className="products__description">Adicione itens</span>
                        </>
                    :   
                        
                        foodsCart.map( ( food ) => <CartCardProduct key={food.id} food={food} setFoodsCart={setFoodsCart} setValueCat={setValueCat}/> )
                        
                        
                }
            </section>
                {
                    foodsCart != 0 && 

                    <div className="total">
                        <span className="total__linha"></span>

                        <div className="total__information">
                            <span className="information__total">Total</span>
                            <span className="information__value">{`R$ ${ valueCat.toFixed(2) }`}</span>
                        </div>

                        <ButtonLarge onClick={() => {setFoodsCart([]); setValueCat(0)}}>Remover Todos</ButtonLarge>
                    </div>
                }
        </CartStyled>
    )
}