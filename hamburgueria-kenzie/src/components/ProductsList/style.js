import styled, { css }  from "styled-components"

export const ProductListStyled = styled.section`

    box-sizing: border-box;

    width: 100%;
    min-height: 381px;
    max-height: 381px;

    display: flex;

    padding: 15px 0px 0px 15px;

    overflow: scroll hidden;

    ::-webkit-scrollbar{
        height: 10px;
        background-color: transparent;
    }

    @media(min-width:1000px){
        width: 100%;
        
        padding:0px;

        overflow:unset;

        flex-wrap: wrap;

        width: auto;
        min-height: unset;
        max-height: unset;
    }

`