import styled from "styled-components"

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    position: absolute;
    top: 0;
    left: 0;

    margin-top: 10px;
    margin-left: 10px;
`

export const ButtonMenu = styled.button`
    border: none;
    color: #fff;

    cursor: pointer;
    font-size: 45pt;
    transition: all .3s ease-in;

    &:hover {
        color: #b37519
    }
`

export const MenuListContainer = styled.div`
    width: 500px;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    background-color: #fff;

    transition: all .3s ease-out;

    z-index: 2500;
`

export const MenuList = styled.ul`
    list-style-type: none;
    background-color:#fff;
    padding: 0;
    margin: 0;

    margin-top: 10%;
`

export const MenuItem = styled.button`
    font-size: 24px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    background-color:#fff;
    cursor: pointer;
    border: none;
    transition: all .3s ease-in;

    display: flex;
    align-items: center;

    &:hover{
        color: #FF9A02;
    }

    &:last-child {
        border-bottom: none;
    }
`

export const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    border: none;
    background: transparent;
    
    cursor: pointer;
    font-size: 36pt;

    color: #fff;

    transition: all .3s ease-out;

    &:hover {
        transform: scale(1.2);
    }
`

export const BoxInfo = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 5%;
`