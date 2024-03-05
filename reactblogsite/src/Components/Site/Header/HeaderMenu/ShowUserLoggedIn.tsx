import { useUserContext } from "../../../../Hooks/Context/useContext/useUserContext"
import './ShowUserLoggedIn.scss'
export const ShowUserLoggedIn = () => {
    const { user } = useUserContext();
    
    return (
        <div>
            { user && <div className="showUserLoggedIn">You are logged in as: {user.userName}</div>}
        </div>
    )
}