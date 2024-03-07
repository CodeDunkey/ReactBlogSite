import './PostPage.scss'
import { usePosts } from '../../Hooks/usePosts'
import { useBlogs } from '../../Hooks/useBlogs'
import { useComments } from '../../Hooks/useComments'
import { useUserContext } from '../../Hooks/Context/useContext/useUserContext'
export const PostPage = ({ postTitle, blogTitle, blogUserName }: { postTitle: string, blogTitle: string, blogUserName: string }) => {
    const { user } = useUserContext()
    const { posts } = usePosts()
    const { comments } = useComments()
    console.log('postTitle', postTitle);
    console.log('blogTitle', blogTitle);
    console.log('blogUserName', blogUserName);
    const postComments = comments.map((comment, index) => {
        if (comment.userName === blogUserName && comment.postTitle === postTitle && comment.blogTitle === blogTitle){
            console.log('dateTimeStamp', comment.dateTimeStamp, index);
            console.log('dateTimeStamp', comment.dateTimeStamp, index === 1);
            
            // if (){

            // }
            return (
                <div className='comment'>
                    <div>User: {comment.fromUser}</div>
                    <div>{comment.dateTimeStamp}</div>
                    <div>{comment.comment}</div>
                </div>
            )
        }
    })
    
    const post = posts.map((post) => {
        if (blogUserName === post.userName && post.blogTitle === blogTitle && post.postTitle === postTitle) {
            return (
                <div>
                    <h1>Headline: {post.postTitle}</h1>
                    <h2>Post Text: {post.text}</h2>
                    {postComments}
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
