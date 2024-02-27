import './MainWrapper.scss'
import { useUser } from '../../../Hooks/useUser'
import { PostCarousel } from '../../PostCarousel/PostCarousel';
import { MyPosts } from './MyPosts';
import { Button } from '../../Button/Button';
import { Type } from '../../Button/Button';
export const MainWrapper = () => {
    const { user } = useUser();
    
    return (
        <div className="mainWrapper" >

            {/* <ShowContentFromUsers /> */}
            {(!user) && (<div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, quibusdam quam perspiciatis libero iusto officia ab est eaque, quaerat placeat reprehenderit, similique dolore vitae natus eos dolor sequi esse atque in tempore dolorum corporis nam. </div>)}
            {(user) && <MyPosts/>}

        </div>
    )
}

