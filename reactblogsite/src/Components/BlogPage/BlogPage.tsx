import './BlogPage.scss'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../Hooks/Context/useContext/useUserContext'
import { usePosts } from '../../Hooks/usePosts'
import { Blog } from '../../Types/Types'
import { CreateNewPost } from './CreateNewPost'
export const BlogPage = ({blog}: {blog: Blog}) => {
    // { blogTitle, blogIdNumber, blogUserName }: { blogTitle: string, blogIdNumber: number, blogUserName: string }
    const { user } = useUserContext();
    const { posts } = usePosts();
    let userName = ""
    if (user?.userName !== undefined){
        userName = user.userName
    }
    const blogPosts = posts.map((post) => {
        if (post.blogTitle === blogTitle && post.userName === blogUserName) {
            return (
                <Link to={`/Blog/(${blogTitle})/Post/(${post.postTitle})`} className="blogLinkStyle">
                    <div className='blogPost'>
                        {post.postTitle}
                    </div>
                </Link>
            )
        }
    })
    return (
        <div className='blogPageWrapper'>
            <div className='BlogHeaderWrapper'>
                <div className='blogheaderItem'><div></div></div>
                <div className='blogheaderItem'><h1>Blog: {blogTitle} By: {blogUserName}</h1></div>
                <div className='blogheaderItem'>{user?.userName === blogUserName && <CreateNewPost blogTitle={blogTitle} blogIdNumber={blogIdNumber} userName={userName}/>}</div>
            </div>
            <div className='BlogPostsWrapper'>{blogPosts}</div>
        </div>
    )
}