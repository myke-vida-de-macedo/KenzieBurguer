import styled, { css } from "styled-components"

export const CartStyled = styled.div`

    box-sizing: border-box;

    width: 100%;

    height: auto;

    padding: 0px 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: var(--font-inter);

    @media(min-width:1000px){
        width: auto;

        padding: 0px 0px 0px 65px;
    }

    .header{

        box-sizing: border-box;

        width: 100%;
        min-width: 288px;
        max-width: 384px;

        height: 65px;

        background-color: gray;

        background: var(--color-primary);
        border-radius: 5px 5px 0px 0px;

        padding: 22px 0px 13px 21px;
        
        text-align: start;

        @media(min-width:1000px){
            width: 100%;
            min-width: 365px;
            max-width: 365px;
        }

        .header__tittle{
            font-size: 18px;
            font-weight: 700;

            color: #FFF;
        }
    }

    .products{
        box-sizing: border-box;

        width: 100%;
        min-width: 288px;
        max-width: 384px;
        
        display: flex;
        flex-direction: column;

        @media(min-width:1000px){
            width: 100%;
            min-width: 365px;
            max-width: 365px;
        }

        ${( {foodsCart} )=>

            foodsCart == 0 ?
                css`
                    height: 158px;

                    justify-content: center;
                    align-items: center;
                `
            :
                css`height: 323px;
                
                `
        }

        background-color: var(--grey-0);

        .products__tittle{
            font-size: 18px;
            font-weight: 700;

            line-height: 24px;

            color: var(--grey-100);
        }

        .products__description{
            font-size: 14px;
            font-weight: 400;

            line-height: 24px;

            color: var(--grey-50);
        }
    }

    .total{
        box-sizing: border-box;

        width: 100%;
        min-width: 288px;
        max-width: 384px;

        height: 145px;

        background-color: var(--grey-0);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        padding: 0px 18.45px 20px 18.45px;
        border-radius: 0px 0px 5px 5px;

        @media(min-width:1000px){
            width: 100%;
            min-width: 365px;
            max-width: 365px;
        }

        .total__linha{
            width: 90%;
            height: 2px;

            background-color: var(--grey-20);
        }

        .total__information{
            width: 100%;
            display: flex;
            justify-content: space-between;
        }

        .information__total{
            font-size: 14px;
            font-weight: 600;
             
            color: var(--grey-100);
        }

        .information__value{
            font-size: 14px ;
            font-weight: 600;
             
            color: var(--grey-50);
        }
    }
`