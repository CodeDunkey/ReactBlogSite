import './UserSidePanel.scss'
import { useUserContext } from '../../../../Hooks/Context/useContext/useUserContext'
export const UserSidePanel = () => {

    return (
        <div>
            <div id="openHeaderburgerMenu" className="openHeaderburgerMenu" onClick={()=>{}}>☰</div>
            <div id="headerBurgerMenu" className="headerBurgerMenu">
                <div id="closeHeaderBurgerMenu" className="closeHeaderBurgerMenu" onClick={()=>{}}>X</div>
            </div>
        </div>
    )
}

