import styled from "styled-components"

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    display: flex;
    margin-top: 8%;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 40pt;
    background-color: #fff;

    width: 750px;
    border-radius: 18px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
`

export const ContainerButton= styled.div`
    margin-top: 8%;
`

export const Button = styled.button`
    width: 270px;
    height: 60px;

    cursor: pointer;
    border: none;
    border-radius: 15px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-size: 20pt;
    font-weight: bold;

    transition: all .3s ease-in;

    &:hover {
        background-color: #b37519;
        color: #fff;
    }

    background-color: #fff;
`

export const Footer = styled.footer`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
`

export const Image = styled.img`
    width: 100vw;
    height: 35vh;
`
