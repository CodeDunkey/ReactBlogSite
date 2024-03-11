import './HeaderWrapper.scss'
import { HeaderLogo } from '../HeaderLogo/HeaderLogo'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'
import { NavBar } from '../../../NavBar/NavBar'
import { UserSidePanel } from '../UserSidePanel/UserSidePanel'
export const HeaderWrapper = () => {
    return (
        <div className="headerWrapper">
            <HeaderLogo />
            <NavBar />
            <HeaderMenu />
            <UserSidePanel />
        </div>
    )
}