import styled from "styled-components"

export const ButtonQuestion = styled.button`
    position: absolute;
    top: 80%;
    left: 95%;
    transform: translate(-50%, -50%);
    z-index: 1;

    width: 90px;
    height: 90px;
    border: none;
    border-radius: 50%;

    font-size: 38pt;

    cursor: pointer;

    font-weight: bold;
    color: #fff;

    transition: all .3s ease-in;

    &:hover {
        background-color: #b37519;
    }
`