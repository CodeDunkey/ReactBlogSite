
import './HeaderWrapper.scss'
import { HeaderLogo } from '../HeaderLogo/HeaderLogo'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'
export const HeaderWrapper = () => {
    return (
        <div className="headerWrapper">
            <HeaderLogo />
            <HeaderMenu />
            
        </div>
    )
}