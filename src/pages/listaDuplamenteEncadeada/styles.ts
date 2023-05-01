import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`

export const Image = styled.img`
    width: 100vw;
    height: 40vh;
    margin-top: 4%;
`

export const Footer = styled.div`
    position: absolute;
    bottom: 0;

    display: flex;

    z-index: 1000;
`

export const ContainerButton = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`