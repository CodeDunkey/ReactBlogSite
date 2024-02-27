import { useBlogs } from "../../Hooks/useBlogs";
import { Post } from "../../Types/Types";
import './PostCarousel.scss'
export const PostCarousel = () => {
    const { blogs } = useBlogs();

    const postCarousel = blogs.map((blog) => {
        const posts = blog.post?.map((post) => {
            return <h5>{post.headLine}</h5>
        })
        return (
            <div className="postCarouselWrapper">
                <div className="postCarousel">
                    <h1>{blog.blogTitle}</h1>
                    <div>{posts}</div>
                </div>
            </div>
        )
    })
    return (
        <>
            {postCarousel}
        </>
    )
}