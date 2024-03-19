import { Route, Routes, Link} from "react-router-dom"
import { HomeRoute } from "./HomeRoute"
import { BlogRoute } from "./BlogRoute"
import { PostRoute } from "./PostRoute"
import { useBlogs } from "../Hooks/useBlogs"
import { usePosts } from "../Hooks/usePosts"
export const AppRoutes = () => {
    
    const {blogs} = useBlogs()
    const {posts} = usePosts()

    const blogPath = blogs.map((blog) => {
        return <Route path={`/Blog/(${blog.blogIdNumber.toString()})`} element={<BlogRoute blog={blog}/>}/>
    })
    // blogTitle={blog.blogTitle} blogIdNumber={blog.blogIdNumber} blogUserName={blog.userName}
    const blogPostPath = blogs.map((blog) => {
        const postPath = posts.map((post) => {
            return <Route path={`/Blog/(${blog.blogIdNumber})/Post/(${post.postIdNumber})`} element={<PostRoute post={post} blog={blog}/>}/>
        })
        return postPath
    })

    return (
        <div>
            <Routes>
                <Route index element={<HomeRoute />}/>
                <Route path="/Home" element={<HomeRoute />}/>
                {blogPath}
                {blogPostPath}
            </Routes>
        </div>
    )
}
//