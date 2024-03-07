import { BlogPage } from "../Components/BlogPage/BlogPage"
import { HeaderWrapper } from "../Components/Site/Header/HeaderWrapper/HeaderWrapper"
export const Blog = ({blogTitle, blogUserName}: {blogTitle: string, blogUserName: string}) => {
    return (
        <div>
            <HeaderWrapper />
            <BlogPage blogTitle={blogTitle} blogUserName={blogUserName}/>
        </div>
    )
}