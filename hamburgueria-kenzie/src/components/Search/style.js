import styled, { css } from "styled-components"

export const SearchStyled = styled.div`

    box-sizing: border-box;

    width: 100%;
    min-width: 288px;
    max-width: 382px;

    height: 60px;
    min-height: 60px;

    padding: 10px;

    display: flex;
    justify-content: space-between;

    background-color: #FFFFFF;

    border: 2px solid var(--grey-20);
    border-radius: 8px;

    .Entrada{
        width: calc(100% - 64px);

        font-family: var(--font-inter);
        font-size: 16px;
        font-weight: 400;

        color: var(--grey-50);

        outline: 0;
        ::placeholder{
            color: var(--grey-20);
        }
    }
`