import styled from "styled-components"

export const Container = styled.div`
    position: absolute;
    top: 0;
    margin-top: 10%;
    margin-right: 15%;
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column; /* Alterado para column */
    justify-content: center;
    align-items: center;

    width: 85vw;
    height: auto; /* Alterado para auto */

    z-index: 2000;
`;


export const Area = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2%; /* Adicione um espaçamento entre a pilha e a área de input */
`;


export const AreaInput = styled.div`
    display: flex;
    flex-direction: row;
    
`

export const Text = styled.label`
    margin-bottom: 5%;
    font-size: 22px;
    color: #fff;
    font-weight: bold;
`

export const AreaTextAndInput = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const Input = styled.input`
    width: 95px;
    height: 55px;

    text-align: center;
    font-size: 30px;

    border: none;
    border-radius: 10px;

    outline: none;

    background-color: #fff;
`

export const ContainerButton = styled.div`
    position: absolute;
    margin-top: 20%;
`

export const Button = styled.button`
    border: none;
    border-radius: 6px;
    background-color: #fff;
    width: 170px;
    height: 45px;
    cursor: pointer;

    font-size: 22px;
    font-weight: bold;

    transition: all .3s ease-in;

    &:hover {
        background-color: #d9d9d9;
    }
`