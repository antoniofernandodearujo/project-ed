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
export const ButtonQuestionNew = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    margin-top: 2%;
    transform: translate(-50%, -50%);

    width: 90px;
    height: 90px;
    border: none;
    border-radius: 50%;

    font-size: 38pt;

    cursor: pointer;

    font-weight: bold;
    color: #000;
    
    background-color: #fff;

    transition: all .3s ease-in;

    &:hover {
        background-color: #b37519;
        color: #fff;
    }
`
export const ButtonQuestionNewNew = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    margin-top: 2%;
    transform: translate(-50%, -50%);

    width: 90px;
    height: 90px;
    border: none;
    border-radius: 50%;

    font-size: 38pt;

    cursor: pointer;

    font-weight: bold;
    color: #000;
    
    background-color: #868686;

    transition: all .3s ease-in;

    &:hover {
        background-color: #b37519;
        color: #fff;
    }
`