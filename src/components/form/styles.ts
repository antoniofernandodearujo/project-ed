import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 85vw;
    height: 200px;

    z-index: 2000;

    margin-top: 5%;

`

export const Area = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AreaInput = styled.div`
    display: flex;
    flex-direction: row;
    
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