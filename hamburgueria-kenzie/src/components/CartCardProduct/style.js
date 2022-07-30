import styled, { css } from "styled-components"

export const CartCardProductStyled = styled.div`

    width: 100%;
    min-width: 260px;
    max-width:355px ;

    height:80px;
    min-height:80px;
    max-height:80px;

    display: flex;
    justify-content: space-between;

    margin-bottom: 23px;

    
    font-family: var(--font-inter);

    .blockImage{

        box-sizing: border-box;

        width: 80px;
        min-width: 80px;
        max-width: 80px;

        height: 80px;
        min-height: 80px;
        max-height: 80px;

        overflow: hidden;

        background-color: var(--grey-20);
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;

        .blockImage__image{
            width: 90%;
        }
    }

    .blockInformation{

        width: 100%;

        height: 80px;

        padding-left: 10px;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .blockInformation__name{
            font-size: 14px ;
            font-weight: 700;

            color: var(--grey-100);
        }
        
        .blockInformation__category{
            font-size: 12px ;
            font-weight: 400;

            color: var(--grey-50);
        }
    }

    .button{
        align-self: flex-start;

        background-color: transparent;

        margin-top: 15px;

        font-size: 12px ;
        font-weight: 500;

        color: #BDBDBD;

        :hover{
            text-decoration-line: underline;

            color: var(--grey-100);
        }

        :focus{
            color: var(--negative);
        }
    }

    
`