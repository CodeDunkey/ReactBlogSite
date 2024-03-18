import { BlogPage } from "../Components/BlogPage/BlogPage"
import { HeaderWrapper } from "../Components/Site/Header/HeaderWrapper/HeaderWrapper"
import { Blog } from "../Types/Types"
export const BlogRoute = ({blog}: {blog: Blog}) => {
    // {blogTitle, blogIdNumber, blogUserName}: {blogTitle: string, blogIdNumber: number,  blogUserName: string}
    return (
        <div>
            <HeaderWrapper />
            <BlogPage blog={blog}/>
        </div>
    )
}
// blogTitle={blogTitle} blogIdNumber={blogIdNumber} blogUserName={blogUserName}