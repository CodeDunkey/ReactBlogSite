import { useEffect, useState } from "react";
import { useBlogs } from "../../Hooks/useBlogs";

import './PostCarousel.scss'

export const PostCarousel = () => {
    const [blogAmound, setBlogAmound] = useState<number>(1);
    const { blogs } = useBlogs();
    
    // console.log("blogs in PostCarousel", blogs)
    
    const find = (blogAmound: number) => {
        setBlogAmound((blogAmound) => {
        if ( blogAmound < blogs.length) {
            return blogAmound + 1
        }
        return 1
    })
    }
        
        const postCarousel = blogs.map((blog, index) => {
            if (index+1 === blogAmound){
                const posts = blog.post?.map((post) => {
                    return (
                        <div>
                            <h2>{post.headLine}</h2>
                            <h5>{post.text}</h5>
                        </div>
                    )
                })
                return (
                <>
                    <div className="postCarousel">
                        <div className="blogFrom">Blog from {blog.userName}</div>
                        <div className="blogTitle"><h1>{blog.blogTitle}</h1></div>
                        <div className="blogPosts">{posts}</div>
                        <a className="prev" onClick={()=>find(-1)}>❮</a>
                        <a className="next" onClick={()=>find(1)}>❯</a>
                    </div>
                </>
        )}
            
        })

    useEffect(() => {
        const interval = setInterval(() => {
            setBlogAmound((blogAmound) => {
                if (blogAmound < blogs.length) {
                    return blogAmound + 1
                }
                return 1
            })
        }, 2950);
        return () => clearInterval(interval)
    })
    
    return (
        <div className="postCarouselWrapper">
            {postCarousel}
        </div>
    )
}