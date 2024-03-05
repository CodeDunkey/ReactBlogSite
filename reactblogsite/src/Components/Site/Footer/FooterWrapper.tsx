import './FooterWrapper.scss'
import { useUserContext } from '../../../Hooks/Context/useContext/useUserContext'
export const FooterWrapper = () => {
    const {user} = useUserContext();

    return (
        <div className="footerWrapper">
            
        </div>
    )
}