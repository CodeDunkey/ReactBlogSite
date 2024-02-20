import './FooterWrapper.scss'
import { useUser } from '../../../Hooks/useUser'
export const FooterWrapper = () => {
    const { user } = useUser();
    // console.log("user: ", user)
    return (
        <div className="footerWrapper">
            {}
        </div>
    )
}