import React from 'react'
//styles
import * as S from './styles'

interface ButtonProps {
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <S.ButtonQuestion onClick={onClick} type="button">?</S.ButtonQuestion>
    )
}

export default Button