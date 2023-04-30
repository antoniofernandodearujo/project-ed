import React from 'react'
//styles
import * as S from './styles'

interface ButtonProps {
    onClick?: () => void
    type?: number
}

const Button: React.FC<ButtonProps> = ({ onClick, type }) => {

    if(type === 1) 
        return <S.ButtonQuestionNew onClick={onClick} type="button">?</S.ButtonQuestionNew>

    if(type === 2)
        return <S.ButtonQuestionNewNew onClick={onClick} type="button">?</S.ButtonQuestionNewNew>

    return (
        <S.ButtonQuestion onClick={onClick} type="button">?</S.ButtonQuestion>
    )
}

export default Button