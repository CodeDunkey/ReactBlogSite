import './BlogPage.scss'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../Hooks/Context/useContext/useUserContext'
import { usePosts } from '../../Hooks/usePosts'
import { CreateNewPost } from './CreateNewPost'
export const BlogPage = ({ blogTitle }: { blogTitle: string }) => {
    const { user } = useUserContext();
    const { posts } = usePosts();
    const blogPosts = posts.map((post) => {
        if (post.blogTitle === blogTitle) {
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
                <div className='blogheaderItem'><h1>Blog: {blogTitle}</h1></div>
                <div className='blogheaderItem'><CreateNewPost blogTitle={blogTitle} userName={user?.userName}/></div>
            </div>
            <div className='BlogPostsWrapper'>{blogPosts}</div>
        </div>
    )
}