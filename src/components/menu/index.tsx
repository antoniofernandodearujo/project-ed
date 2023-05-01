import React, { useState } from 'react'
//styles
import * as S from './styles'
//icons
import { IoMenu, IoClose, IoRadioButtonOnOutline } from "react-icons/io5";
//route-dom
import { NavLink } from 'react-router-dom'

const Menu: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    }

    return(
       
        <S.MenuContainer>
            <S.ButtonMenu onClick={openMenu} type="button"><IoMenu /></S.ButtonMenu>
            <S.MenuListContainer style={{ left: isMenuOpen ? "0" : "-500px" }}>

                <S.CloseButton onClick={handleCloseMenu}><IoClose style={{ backgroundColor: '#fff', color: '#FF9A02' }}/></S.CloseButton>

                <S.MenuList>
                    <NavLink to="/list-sequential"><S.MenuItem> <IoRadioButtonOnOutline style={{ backgroundColor: '#fff' }}/> Lista Sequencial</S.MenuItem></NavLink>
                    <NavLink to="/list-simplesmente-encadeada"><S.MenuItem> <IoRadioButtonOnOutline style={{ backgroundColor: '#fff' }}/> Lista Simplesmente Encadeada</S.MenuItem></NavLink>
                    <NavLink to="/list-duplamente-encadeada"><S.MenuItem> <IoRadioButtonOnOutline style={{ backgroundColor: '#fff' }}/> Lista Duplamente Encadeada</S.MenuItem></NavLink>
                    <S.BoxInfo>
                        <S.MenuItem> <IoRadioButtonOnOutline style={{ backgroundColor: '#fff' }}/> Mais informações</S.MenuItem>
                    </S.BoxInfo>
                </S.MenuList>

            </S.MenuListContainer>
        </S.MenuContainer>
        
    )
}

export default Menu