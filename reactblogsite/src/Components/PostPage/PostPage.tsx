import './PostPage.scss'
import { usePosts } from '../../Hooks/usePosts'
import { useUserContext } from '../../Hooks/Context/useContext/useUserContext'
import { CreateNewComments } from '../CreateNewComments/CreateNewComments'
import { CommentSection } from '../Comments/CommentSection'
import { Blog, Post } from '../../Types/Types'

export const PostPage = ({ post, blog }: { post: Post, blog: Blog }) => {
    
    const { posts } = usePosts();
    const { user } = useUserContext();
    
    const postMap = posts.map((element) => {
        if (blog.userName === post.userName && post.blogIdNumber === blog.blogIdNumber && post.postIdNumber === element.postIdNumber) {
            return (
                <div>
                    <h1>Blog: {blog.blogTitle} By: {blog.userName}</h1>
                    <h1>Post: {post.postTitle}</h1>
                    <h2>Post Text: <br></br>{post.text}</h2>
                    {user && <CreateNewComments post={post} blog={blog} />}
                    <div><h6>Comments</h6><CommentSection post={post} blog={blog}/> </div>
                </div>
            )
        }
    })

    return (
        <div className='postPageWrapper'>
            {postMap}
        </div>
    )
}