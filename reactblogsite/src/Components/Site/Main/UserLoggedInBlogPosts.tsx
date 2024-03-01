import { useState, useEffect } from "react";
import { useUserContext } from "../../../Hooks/useUserContext";
import { Blog } from "../../../Types/Types";

export const UserLoggedInPosts = () => {
    const { user } = useUserContext();

    const userBlogPosts = user?.blog?.map((blog) => {

        let posts = blog.post?.map((post) => {
            return post.text
        })
        return (
            <div className='Posts'>
                <h2>{blog.blogTitle}</h2>
                <p>{posts}</p>
            </div>
        )
    })

    return (
        <div>
            <div className="">Here is all your blogs and posts</div>
            <div >{userBlogPosts}</div>
        </div>
    )
}