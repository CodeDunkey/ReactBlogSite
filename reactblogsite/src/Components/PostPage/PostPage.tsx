import './PostPage.scss'
import { usePosts } from '../../Hooks/usePosts'
import { useUserContext } from '../../Hooks/Context/useContext/useUserContext'
import { CreateNewComments } from '../CreateNewComments/CreateNewComments'
import { CommentSection } from '../Comments/CommentSection'

export const PostPage = ({ postTitle, blogTitle, blogUserName }: { postTitle: string, blogTitle: string, blogUserName: string }) => {
    
    const { posts } = usePosts();
    const { user } = useUserContext();
    
    const post = posts.map((post) => {
        if (blogUserName === post.userName && post.blogTitle === blogTitle && post.postTitle === postTitle) {
            return (
                <div>
                    <h1>Blog: {blogTitle} By: {blogUserName}</h1>
                    <h1>Post: {post.postTitle}</h1>
                    <h2>Post Text: <br></br>{post.text}</h2>
                    {user?.userName === blogUserName && <CreateNewComments postTitle={postTitle} blogTitle={blogTitle} blogUserName={blogUserName} />}
                    <div><h6>Comments</h6><CommentSection postTitle={postTitle} blogTitle={blogTitle} blogUserName={blogUserName}/> </div>
                </div>
            )
        }
    })

    return (
        <div className='postPageWrapper'>
            {post}
        </div>
    )
}