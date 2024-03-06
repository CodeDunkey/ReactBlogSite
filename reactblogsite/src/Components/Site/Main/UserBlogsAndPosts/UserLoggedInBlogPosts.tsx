import { useState, useEffect } from "react";
import { useUserContext } from "../../../../Hooks/Context/useContext/useUserContext";
import { useBlogs } from "../../../../Hooks/useBlogs";
import { usePosts } from "../../../../Hooks/usePosts";
import { Link } from "react-router-dom";
import './UserLoggedInBlogPosts.scss'

export const UserLoggedInPosts = () => {
    const { user } = useUserContext();
    const { blogs } = useBlogs();
    const { posts } = usePosts();

    const userBlogs = blogs.map((blog) => {
        if (user?.userName === blog.userName) {
            console.log(blog)

            const userPosts = posts.map((post) => {
                if (user.userName === post.userName && blog.blogTitle === post.blogTitle) {
                    return (
                        <>
                            <h3>{post.postTitle}</h3>
                            {post.text}
                        </>
                    )
                }
            })
            return (
                <Link to={`/Blog/(${blog.blogTitle})`} className="blogLinkStyle">
                    <div className="blogs">
                        <h1>{blog.blogTitle}</h1>
                    </div>
                </Link>
            )
        }
    })


    return (
        <div>
            <h4 className="headLineForBlogs">Here is all your blogs</h4>
            <div >{userBlogs}</div>
        </div>
    )
}