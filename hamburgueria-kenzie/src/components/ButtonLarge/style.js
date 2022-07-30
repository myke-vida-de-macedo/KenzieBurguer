import styled, { css } from "styled-components"

export const ButtonLargeStyled = styled.button`
    transition: 300ms;

    box-sizing: border-box;

    width: 100%;
    min-width: 240px;
    max-width: 343px;

    height: 60px;
    min-height: 60px;

    background-color: var(--grey-20);
    color: var(--grey-50);

    border-radius: 8px;

    :hover{
        transition: 300ms;

        background-color: var(--grey-50);
        color: var(--grey-20);
    }
`