import './FooterWrapper.scss'
import { useUserContext } from '../../../Hooks/useUserContext'
export const FooterWrapper = () => {
    const {user} = useUserContext();

    // let posts;
    // if(user !== undefined){
    // posts = user.blog?.map((element) => 
    //     <div className='posts'>
    //         <h1>{element.blogTitle}</h1>
            
    //     </div>
    // )
    // }
    return (
        <div className="footerWrapper">
            
        </div>
    )
}