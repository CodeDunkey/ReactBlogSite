import { useContext } from "react"
import { PostContext } from "../createContext.Provider/PostContextProvider"
export const usePostContext = () => {
    const postContext = useContext(PostContext);
    return {
        posts: postContext.posts,
        setPosts: postContext.setPosts,
    }
}