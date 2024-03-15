import './UserSidePanel.scss'
import { useUserContext } from '../../../../Hooks/Context/useContext/useUserContext'
import { ChangeEvent, useRef, useState } from 'react'
export const UserSidePanel = () => {
    
    const [ openMenu, setOpenMenu ] = useState<boolean>(false);
    const { user } = useUserContext();
    let textEmail = useRef<string>()
    const textinputEmail = (x: ChangeEvent<HTMLInputElement>) => {
        textEmail.current = x.target.value;
    }
    const openBurgerMenu = () => {
        setOpenMenu(!openMenu)
    }
    const closeBurgerMenu = () => {
        setOpenMenu(!openMenu)
    }

    const profile = <div>
        <label htmlFor='email'>email</label>
        <input id="email" type="text"  onChange={textinputEmail}/>
    </div>
    return (
        <div>
            {!openMenu && <div id="openburgerMenu" className="openburgerMenu" onClick={openBurgerMenu}>☰</div>}
            {openMenu && <div id="burgerMenu" className="burgerMenu">
                {profile}
                <div id="closeBurgerMenu" className="closeBurgerMenu" onClick={closeBurgerMenu}>X</div>
            </div>}
        </div>
    )
}

