import { useEffect, useState } from "react"
import { clientApi } from "../Utilities/ClientAPI";
import { Post } from "../Types/Types";
export const useViewBloggersContent = () => {
    const [posts, setPosts] = useState<any>();
    
    //     const userPosts = clientApi.getPosts();
    //     // const show = userPosts.map((e)=> e.headLine)
    // // const getPosts = () => {
    //     //     const users = clientApi.getPosts();
    // //     setPosts(users)
    // // }
    // // getPosts();
    // console.log("userPosts in use", userPosts)
    // console.log("show in use", show)
    useEffect(()=>{
        const getPosts = () => {
            const userPosts = clientApi.getPosts();
            setPosts(userPosts)
        }
        getPosts();
    },[])
    return {
        posts,
    }
}