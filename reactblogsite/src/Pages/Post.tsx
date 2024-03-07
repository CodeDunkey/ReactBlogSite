import { HeaderWrapper } from "../Components/Site/Header/HeaderWrapper/HeaderWrapper"
import { PostPage } from "../Components/PostPage/PostPage"
export const Post = ({postTitle, blogTitle, blogUserName}: {postTitle: string, blogTitle: string, blogUserName: string }) => {
    return (
        <div>
            <HeaderWrapper />
            <PostPage  postTitle={postTitle} blogTitle={blogTitle} blogUserName={blogUserName}/>
        </div>
    )
}