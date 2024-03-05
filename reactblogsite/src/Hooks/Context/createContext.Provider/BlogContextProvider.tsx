import { Blog } from "../../../Types/Types";
import { ReactElement, createContext, useState } from "react"

export type BlogContextValue = {
    blogs: Blog[],
    setBlogs: (blogs: Blog[]) => void,
}
export const BlogContext = createContext<BlogContextValue>({
    blogs: [],
    setBlogs: () => { },
});

export const BlogContextProvider = ({ children }: { children: ReactElement }) => {

    const [blogs, setBlogs] = useState<Blog[]>([]);
    
    return (
        <BlogContext.Provider value={{ blogs, setBlogs }}>
            {children}
        </BlogContext.Provider>
    )
}