import './FooterWrapper.scss'
import { useUser } from '../../../Hooks/useUser'
export const FooterWrapper = () => {
    const {user} = useUser();

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