import { HeaderWrapper } from "../Components/Site/Header/HeaderWrapper/HeaderWrapper"
import { PostPage } from "../Components/PostPage/PostPage"
import { Blog, Post } from "../Types/Types"
export const PostRoute = ({post, blog}: {post: Post, blog: Blog }) => {
    return (
        <div>
            <HeaderWrapper />
            <PostPage  post={post} blog={blog}/>
        </div>
    )
}