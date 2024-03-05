import { Comment } from "../../../Types/Types";
import { ReactElement, createContext, useState } from "react"

export type CommentContextValue = {
    comments: Comment[],
    setComments: (comments: Comment[]) => void,
}
export const CommentContext = createContext<CommentContextValue>({
    comments: [],
    setComments: () => { },
});

export const CommentContextProvider = ({ children }: { children: ReactElement }) => {

    const [comments, setComments] = useState<Comment[]>([]);
    
    return (
        <CommentContext.Provider value={{ comments, setComments }}>
            {children}
        </CommentContext.Provider>
    )
}