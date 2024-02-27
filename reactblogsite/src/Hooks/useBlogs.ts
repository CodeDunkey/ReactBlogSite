import { useEffect, useState } from "react"
import { clientApi } from "../Utilities/ClientAPI";
import { Blog, Post } from "../Types/Types";
export const useBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    
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
    
    // console.log("show in use", show)
    useEffect(()=>{
        const getBlogs = () => {
            const userBlogs = clientApi.getBlogs();
            setBlogs(userBlogs)
        }
        getBlogs();
    },[])
    return {
        blogs,
    }
}