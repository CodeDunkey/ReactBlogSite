import { useContext } from "react"
import { CommentContext } from "../createContext.Provider/CommentContextProvider";
export const useCommentContext = () => { 
    
    const commentContext = useContext(CommentContext);
    
    return {
        comments: commentContext.comments,
        setComments: commentContext.setComments,
    }
}