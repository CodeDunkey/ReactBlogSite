import './HeaderWrapper.scss'
import { HeaderLogo } from '../HeaderLogo/HeaderLogo'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'
import { NavBar } from '../../../NavBar/NavBar'
import { UserSidePanel } from '../UserSidePanel/UserSidePanel'
import { useUserContext } from '../../../../Hooks/Context/useContext/useUserContext'
export const HeaderWrapper = () => {
    const { user } = useUserContext();
    return (
        <div className="headerWrapper">
            <HeaderLogo />
            <NavBar />
            <HeaderMenu />
            {user && <UserSidePanel />}
        </div>
    )
}