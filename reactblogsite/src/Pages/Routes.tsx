import { Route, Routes, Link} from "react-router-dom"
import { Home } from "./Home"
import { BlogRoute } from "./BlogRoute"
import { Post } from "./Post"
import { useBlogs } from "../Hooks/useBlogs"
import { usePosts } from "../Hooks/usePosts"
export const AppRoutes = () => {
    
    const {blogs} = useBlogs()
    const {posts} = usePosts()

    const blogPath = blogs.map((blog) => {
        return <Route path={`/Blog/(${blog.blogTitle})`} element={<BlogRoute blog={blog}/>}/>
    })
    // blogTitle={blog.blogTitle} blogIdNumber={blog.blogIdNumber} blogUserName={blog.userName}
    const blogPostPath = blogs.map((blog) => {
        const postPath = posts.map((post) => {
            return <Route path={`/Blog/(${blog.blogTitle})/Post/(${post.postTitle})`} element={<Post postTitle={post.postTitle} blogTitle={blog.blogTitle} blogUserName={blog.userName}/>}/>
        })
        return postPath
    })

    return (
        <div>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/Home" element={<Home />}/>
                {blogPath}
                {blogPostPath}
            </Routes>
        </div>
    )
}
//