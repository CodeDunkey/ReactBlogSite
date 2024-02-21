import './FooterWrapper.scss'
import { useUser } from '../../../Hooks/useUser'
export const FooterWrapper = () => {
    const {user} = useUser();

    const posts = user.post?.map((element) => 
        <div className='posts'>
            <h1>{element.headLine}</h1>
            <p>{element.text}</p>
        </div>
    )
    
    return (
        <div className="footerWrapper">
            {posts}
        </div>
    )
}