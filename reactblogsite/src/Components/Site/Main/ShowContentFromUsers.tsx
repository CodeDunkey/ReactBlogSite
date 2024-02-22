import { useViewBloggersContent } from "../../../Hooks/useViewBloggersContent";
import { Post } from "../../../Types/Types";
import './ShowContentFromUsers.scss'
export const ShowContentFromUsers = () => {
    const { posts } = useViewBloggersContent();

    const postCarousel = posts.map((post)=>{
        return (<h1 className="postCarousel">{post.headLine}</h1>)
    })
    // ((post: any) => {
    //     // 
    // }
    // )
    // console.log();
    // console.log("posts in ShowContentFromUsers: ", posts)
    // console.log("postCarousel: ", postCarousel)

    return (
        <div>{postCarousel}</div> // postCarousel
    )
}