import './MainWrapper.scss'
import { useUser } from '../../../Hooks/useUser'
import { ShowContentFromUsers } from './ShowContentFromUsers';
import { Button } from '../../Button/Button';
import { Type } from '../../Button/Button';
export const MainWrapper = () => {
    const { user } = useUser();
    // console.log("user in Main", user)
    let myPosts;
    if (user !== undefined) {
        myPosts = user.post?.map((post) => {
            return (
                <>
                    <h2>{post.headLine}</h2>
                    <p>{post.text}</p>
                </>
            )
        })
    }
    return (
        <div className="mainWrapper" >

            {(!user) && (<div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, quibusdam quam perspiciatis libero iusto officia ab est eaque, quaerat placeat reprehenderit, similique dolore vitae natus eos dolor sequi esse atque in tempore dolorum corporis nam. </div>)}
            {(user) && (
                <div>
                    <div className='myPosts'>{myPosts}</div>
                    <div>itaque possimus eum ducimus alias, necessitatibus illo, autem reiciendis! Deserunt at fugit animi a provident consectetur facere, quasi, aperiam ducimus modi, culpa eos vel commodi earum dolores?</div>
                </div>
            )}
            <ShowContentFromUsers />

        </div>
    )
}