import './FooterWrapper.scss'
import { useUserContext } from '../../../Hooks/useUserContext'
export const FooterWrapper = () => {
    const {user} = useUserContext();

    return (
        <div className="footerWrapper">
            
        </div>
    )
}