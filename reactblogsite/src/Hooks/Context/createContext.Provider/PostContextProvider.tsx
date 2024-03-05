import { Post } from "../../../Types/Types";
import { ReactElement, createContext, useState } from "react"

export type PostContextValue = {
    posts: Post[],
    setPosts: (posts: Post[]) => void,
}
export const PostContext = createContext<PostContextValue>({
    posts: [],
    setPosts: () => { },
});

export const PostContextProvider = ({ children }: { children: ReactElement }) => {

    const [posts, setPosts] = useState<Post[]>([]);
    
    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostContext.Provider>
    )
}