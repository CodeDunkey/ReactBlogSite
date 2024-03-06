import { BlogPage } from "../Components/BlogPage/BlogPage"
import { HeaderWrapper } from "../Components/Site/Header/HeaderWrapper/HeaderWrapper"
export const Blog = ({blogTitle}: {blogTitle: string}) => {
    return (
        <div>
            <HeaderWrapper />
            <BlogPage blogTitle={blogTitle}/>
        </div>
    )
}