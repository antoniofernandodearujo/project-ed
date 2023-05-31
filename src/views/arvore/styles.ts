import styled from "styled-components"

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    margin-top: 8%;
`

export const ContainerOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 600px;
`

export const ContainerCaminho = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 5%;
`

export const ContainerSearch = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const ContainerArvore = styled.div`
    margin-top: 4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const Title = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    font-size: 35pt;
    background-color: #fff;

    width: 750px;
    height: 100px;
    border-radius: 18px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;

    margin-top: 4%;
    margin-bottom: 4%;
`

export const ContainerButton= styled.div`
    margin-top: 8%;
`

export const Button = styled.button`
    width: 150px;
    height: 35px;

    cursor: pointer;
    border: none;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-size: 14pt;
    font-weight: bold;

    transition: all .3s ease-in;

    &:hover {
        background-color: #b37519;
        color: #fff;
    }

    background-color: #fff;

    margin-bottom: 2%;
`

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;


export const Image = styled.img`
    width: 100vw;
    height: 25vh;
`
