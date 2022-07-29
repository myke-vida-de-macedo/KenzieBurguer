import styled, { css } from "styled-components"

export const HeaderStyled = styled.header`

    box-sizing: border-box;

    width: 100%;
    min-height: 139px;

    background-color: var(--grey-0);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 14px 16px;

    @media(min-width:800px){
        min-height: 80px;

        flex-direction: row;

        padding: 10px 115px;
    }
`