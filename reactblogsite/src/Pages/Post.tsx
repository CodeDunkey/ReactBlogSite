import { HeaderWrapper } from "../Components/Site/Header/HeaderWrapper/HeaderWrapper"
import { PostPage } from "../Components/BlogPage/PostPage/PostPage"
export const Post = ({postTitle, blogTitle}: {postTitle: string, blogTitle: string}) => {
    return (
        <div>
            <HeaderWrapper />
            <PostPage  postTitle={postTitle} blogTitle={blogTitle}/>
        </div>
    )
}