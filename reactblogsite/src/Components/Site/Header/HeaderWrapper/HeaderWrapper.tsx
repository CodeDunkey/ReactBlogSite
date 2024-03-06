import './HeaderWrapper.scss'
import { HeaderLogo } from '../HeaderLogo/HeaderLogo'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'
import { NavBar } from '../HeaderMenu/NavBar'
export const HeaderWrapper = () => {
    return (
        <div className="headerWrapper">
            <HeaderLogo />
            <NavBar />
            <HeaderMenu />
        </div>
    )
}