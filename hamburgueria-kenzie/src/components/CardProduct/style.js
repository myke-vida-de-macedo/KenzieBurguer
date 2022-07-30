import styled, { css } from "styled-components"

export const CardProductStyled = styled.div`
    box-sizing: border-box;

    min-width: 300px;
    height: 346px;

    background-color: azure;

    margin: 0px 20px 20px 0px;
    padding-bottom: 16px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    border: 2px solid var(--grey-20);
    border-radius: 5px;

    font-family: var(--font-inter);

    .BlockImage{

        box-sizing: border-box;

        overflow: hidden;

        width: 296px;
        height: 150px;

        display: flex;
        justify-content: center;
        align-content: center;
        align-self: center;

        background-color: var(--grey-0);

        .BlockImage__image{
            height: 100%;
        }
    }

    .tittle, .categoty, .value{
        margin-left: 20px;
    }

    .tittle{
        font-weight: 700;
        font-size: 18px;

        color: var(--grey-100);
    }

    .categoty{
        font-weight: 400;
        font-size: 12px;

        color: var(--grey-50);
    }

    .value{
        font-weight: 600;
        font-size: 14px;

        color: var(--color-primary);
    }
    
`