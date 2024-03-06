import './PostPage.scss'
import { usePosts } from '../../../Hooks/usePosts'
import { useBlogs } from '../../../Hooks/useBlogs'
import { useUserContext } from '../../../Hooks/Context/useContext/useUserContext'
export const PostPage = ({ postTitle, blogTitle }: { postTitle: string, blogTitle: string }) => {
    const { user } = useUserContext()
    const { posts } = usePosts()
    const { blogs } = useBlogs()


    const blog = blogs.map((blog) => {
        if (blog.userName === user?.userName) {
            if (blog.blogTitle === blogTitle) {
                const post = posts.map((post) => {
                    if (blog.userName === post.userName && post.blogTitle === blogTitle && post.postTitle === postTitle) {
                        return (
                            <div>
                                <h1>Headline: {post.postTitle}</h1>
                                <h2>Post Text: {post.text}</h2>
                            </div>
                        )
                    }
                })
                return post
            }
        }
    })

    return (
        <div className='PostPageWrapper'>
            {blog}
        </div>
    )
}

