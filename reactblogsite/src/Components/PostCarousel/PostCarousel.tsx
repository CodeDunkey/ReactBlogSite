import { useEffect, useState } from "react";
import { useBlogs } from "../../Hooks/useBlogs";
import { usePosts } from "../../Hooks/usePosts";
import './PostCarousel.scss'
import { Link } from "react-router-dom";

export const PostCarousel = () => {
    const [blogAmound, setBlogAmound] = useState<number>(1);
    const { blogs } = useBlogs();
    const { posts } = usePosts();

    const find = (blogAmound: number) => {
        setBlogAmound((blogAmound) => {
            if (blogAmound < blogs.length) {
                return blogAmound + 1
            }
            return 1
        })
    }

    // const postCarousel = blogs.map((blog, index) => {

    //     if (index + 1 === blogAmound) {
    //         const blogPosts = posts?.map((post) => {
    //             if (blog.blogTitle === post.blogTitle && blog.userName === post.userName) {
    //                 return (
    //                     <div>
    //                         <h2>{post.postTitle}</h2>
    //                         <h5>{post.text}</h5>
    //                     </div>
    //                 )
    //             }
    //         })
    //         return (
    //             <>
    //                 <div className="postCarousel">
    //                     <div className="blogFrom">Blog from {blog.userName}</div>
    //                     <div className="blogTitle"><h1>{blog.blogTitle}</h1></div>
    //                     <div className="blogPosts">{blogPosts}</div>
    //                     <a className="prev" onClick={() => find(-1)}>❮</a>
    //                     <a className="next" onClick={() => find(1)}>❯</a>
    //                 </div>
    //             </>
    //         )
    //     }
    // })
    // const postCarousel2 = blogs.map((blog, index) => {

    //     if (index + 2 === blogAmound) {
    //         const blogPosts = posts?.map((post) => {
    //             if (blog.blogTitle === post.blogTitle && blog.userName === post.userName) {
    //                 return (
    //                     <div>
    //                         <h2>{post.postTitle}</h2>
    //                         <h5>{post.text}</h5>
    //                     </div>
    //                 )
    //             }
    //         })
    //         return (
    //             <>
    //                 <div className="postCarousel">
    //                     <div className="blogFrom">Blog from {blog.userName}</div>
    //                     <div className="blogTitle"><h1>{blog.blogTitle}</h1></div>
    //                     <div className="blogPosts">{blogPosts}</div>
    //                     <a className="prev" onClick={() => find(-1)}>❮</a>
    //                     <a className="next" onClick={() => find(1)}>❯</a>
    //                 </div>
    //             </>
    //         )
    //     }
    // })

    const nextNumber = (blogAmound: number) => {
        if (blogAmound < blogs.length) {
            return blogAmound + 1
        }
        return 1
    }
    const postCarousel = blogs.map((blog, index) => {

        if (index + 1 === blogAmound) {
            // console.log("postCarousel index + 1", index + 1, "blogAmound", blogAmound)
            const blogPosts = posts?.map((post) => {
                if (blog.blogIdNumber === post.blogIdNumber) {
                    return (
                        <div>
                            <h2>{post.postTitle}</h2>
                            <h5>{post.text}</h5>
                        </div>
                    )
                }
            })
            return (
                
                    <Link to={`/Blog/(${blog.blogIdNumber})`} className="blogLinkStyle">
                        <div className="post1">
                            <div className="blogFrom"><h1>Blog from {blog.userName}</h1></div>
                            <div className="blogTitle"><h2>{blog.blogTitle}</h2></div>
                            <div className="blogPosts">{blogPosts}</div>
                        </div>
                    </Link>
                
            )
        }
    })
    const postCarousel2 = blogs.map((blog, index) => {

        if (index + 1 === nextNumber(blogAmound)) {
            // console.log("postCarousel2 index + 2", index + 2, "blogAmound", blogAmound)
            const blogPosts = posts?.map((post) => {
                if (blog.blogTitle === post.blogTitle && blog.userName === post.userName) {
                    return (
                        <div>
                            <h2>{post.postTitle}</h2>
                            <h5>{post.text}</h5>
                        </div>
                    )
                }
            })
            return (
                
                    <Link to={`/Blog/(${blog.blogIdNumber})`} className="blogLinkStyle">
                        <div className="post2">
                            <div className="blogFrom"><h1>Blog from {blog.userName}</h1></div>
                            <div className="blogTitle"><h2>{blog.blogTitle}</h2></div>
                            <div className="blogPosts">{blogPosts}</div>
                        </div>
                    </Link>
            
            )
        }
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setBlogAmound((blogAmound) => {
                if (blogAmound < blogs.length) {
                    return blogAmound + 1
                }
                return 1
            })
        }, 5990);
        return () => clearInterval(interval)
    })

    return (
        <div className="postCarouselWrapper">
            <div className="postCarousel">
                {postCarousel}
                {postCarousel2}
            </div>
            <a className="prev" onClick={() => find(-1)}>❮</a>
            <a className="next" onClick={() => find(1)}>❯</a>
        </div>
    )
}