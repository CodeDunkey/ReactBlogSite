import { useContext } from "react"
import { BlogContext } from "../createContext.Provider/BlogContextProvider";

export const useBlogContext = () => { 
    
    const blogContext = useContext(BlogContext);
    // console.log("blogs in useBlogContext, useContext: ", blogContext.blogs)
    return {
        blogs: blogContext.blogs,
        setBlogs: blogContext.setBlogs,
    }
}