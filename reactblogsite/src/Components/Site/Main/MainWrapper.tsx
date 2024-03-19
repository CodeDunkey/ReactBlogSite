import './MainWrapper.scss'
import { useUserContext } from '../../../Hooks/Context/useContext/useUserContext'
import { PostCarousel } from '../../PostCarousel/PostCarousel';
import { UserLoggedInPosts } from './UserBlogsAndPosts/UserLoggedInBlogPosts';
import { Button } from '../../Button/Button';
import { Type } from '../../Button/Button';
export const MainWrapper = () => {
    const { user } = useUserContext();
    
    return (
        <div className="mainWrapper" >
            <PostCarousel />
            {(user) && <UserLoggedInPosts/>}
        </div>
    )
}

