import { Link } from "react-router-dom"
import './NavBar.scss'
import { useUserContext } from "../../Hooks/Context/useContext/useUserContext"
export const NavBar = () => {
    const { user } = useUserContext();
    return (
        <>
            { (
                <div className="navBarWrapper">
                    <div className="navBarItem"><Link to="/Home">Home</Link></div>
                    {/* <div className="navBarItem"><Link to="/Blog">Blog</Link></div> */}
                    {/* <div className="navBarItem"><Link to="/Post">Post</Link></div> */}
                </div>)}
        </>
    )
}
// user &&