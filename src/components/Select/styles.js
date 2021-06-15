import styled from 'styled-components';

export const Container = styled.div`
    text-align: left;
    background: white;
    border: 0.5px solid black;
    border-radius: 5px;
    padding: 0.5rem;
    width: 10rem;
    heigth: 1rem;
    transition: 0.5s;
    margin: 2rem;

    textarea:focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 

    select{
        background: transparent;
        color: gray;
        border: none;
        height: 100%;
        width: 100%;
        &::placeholder{
            color: gray;
        }
    }
`;
