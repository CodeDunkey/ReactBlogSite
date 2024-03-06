import './PostPage.scss'
import { usePosts } from '../../../Hooks/usePosts'
import { useBlogs } from '../../../Hooks/useBlogs'
import { useUserContext } from '../../../Hooks/Context/useContext/useUserContext'
export const PostPage = ({ postTitle, blogTitle }: { postTitle: string, blogTitle: string }) => {
    const { user } = useUserContext()
    const { posts } = usePosts()
    const { blogs } = useBlogs()
    const blog = blogs.map((blog) => {
        
        const post = posts.map((post) => {
            
            if (blog.userName === user?.userName || blog.blogTitle === blogTitle || postTitle === post.postTitle) {
                    console.log('post', post.postTitle);
                    
                    return (
                        <div>
                            <h1>Headline: {post.headLine}</h1>
                            <h2>{post.text}</h2>
                        </div>
                    )
                }

            })
            return post
        
    })

    return (
        <div className='PostPageWrapper'>
            {blog}
        </div>
    )
}