import './MainWrapper.scss'
import { useUserContext } from '../../../Hooks/Context/useContext/useUserContext'
import { PostCarousel } from '../../PostCarousel/PostCarousel';
import { UserLoggedInPosts } from './UserLoggedInBlogPosts';
import { Button } from '../../Button/Button';
import { Type } from '../../Button/Button';
export const MainWrapper = () => {
    const { user } = useUserContext();
    
    return (
        <div className="mainWrapper" >
            <PostCarousel />
            {/* {(!user) && (<div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, quibusdam quam perspiciatis libero iusto officia ab est eaque, quaerat placeat reprehenderit, similique dolore vitae natus eos dolor sequi esse atque in tempore dolorum corporis nam. </div>)} */}
            {(user) && <UserLoggedInPosts/>}
        </div>
    )
}

