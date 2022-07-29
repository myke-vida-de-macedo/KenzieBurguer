import styled, { css } from "styled-components"

export const ButtonStyled = styled.button`

    transition: 300ms;

    font-size: 14px;
    font-weight: 500;

    ${
        ({ green }) =>
            green ?
                css`background-color:var(--color-primary);
                    color:#FFFFFF;`  
            :
                css`background-color:var(--grey-20);
                    color:var(--grey-50);`
    }

    padding: 11.5px 20px;

    border-radius: 8px;
    outline: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        transition: 300ms;
        ${
        ({ green }) =>
            green ?
                css`background-color:var(--color-primary-50);
                    color:#FFFFFF;`  
            :
                css`background-color:var(--grey-50);
                    color:var(--grey-20);`
    }
    }
`