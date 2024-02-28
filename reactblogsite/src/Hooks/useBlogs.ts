import { useEffect, useState } from "react"
import { clientApi } from "../Utilities/ClientAPI";
import { Blog, Post } from "../Types/Types";
import { useBlogContext } from "./useBlogContext";
import { useUserContext } from "./useUserContext";
export const useBlogs = () => {
    const {user} = useUserContext();
    const { blogs, setBlogs} = useBlogContext();
    //     const userPosts = clientApi.getPosts();
    //     // const show = userPosts.map((e)=> e.headLine)
    // // const getPosts = () => {
    //     //     const users = clientApi.getPosts();
    // //     setPosts(users)
    // // }
    // // getPosts();

    // const createBlog = (userName: string, title: string) => {
    //     const newBlog: Blog = { blogTitle: title};
    //     const serverBlog = clientApi.addNewBlog(newBlog, userName);
    //     setBlogs([...blogs, serverBlog as unknown as Blog ]);
    // }
    
    console.log("blogs in useBlogs", blogs)
    useEffect(()=>{
        const getBlogs = () => {
            const userBlogs = clientApi.getBlogs();
            setBlogs(userBlogs)
            console.log("userBlogs", userBlogs)
        }
        getBlogs();
    },[user]) // 
    return {
        blogs,
    }
}

// skal flyttes ud i en context