import { useState, useRef, KeyboardEvent, ChangeEvent } from "react"
import ReactModal from "react-modal"
import { Button, Type } from "../../../Button/Button"
import { useUserContext } from "../../../../Hooks/Context/useContext/useUserContext"
import { useLogInSignUp } from "../../../../Hooks/Context/useContext/useLogInSignUpContext"
import { useAddNewBlog } from "../../../../Hooks/useAddNewBlog"
import { Blog } from "../../../../Types/Types"

export const CreateNewBlog = () => {
    const [newBlog, setNewBlog] = useState<boolean>(false)
    const { user, setUser } = useUserContext()
    const { setKeyDown } = useLogInSignUp()
    const { addNewBlog } = useAddNewBlog()
    let blogTitle = useRef<string>()
    
   
    const toggleNewBlog = () => {
        if (!user) {
            alert("You must be logged in to create a blog");
        }
        if (user) {
            setNewBlog(!newBlog)
            blogTitle.current = undefined;
            
        }
    }
    
    const newBlogAdd = async () => {

        let addBlogToUser;
        if (blogTitle.current !== undefined && user) {
            addBlogToUser = undefined
            console.log("addBlogToUser after being undefined: ", addBlogToUser)
            let blog: Blog = {
                userName: user.userName,
                blogTitle: blogTitle.current,
                blogIdNumber: Math.random(),
            }
            addBlogToUser = await addNewBlog({ blog: blog })
            
            if (addBlogToUser !== undefined){
                setUser({...addBlogToUser})
            }
        }
         
        blogTitle.current = undefined;
        
        
        // activates the modal
        setNewBlog(!newBlog)
        

    }

    const keyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        setKeyDown(event.key)
    }
    const textBlogTitle = (x: ChangeEvent<HTMLInputElement>) => {
        blogTitle.current = x.target.value;
    }

    return (
        <div>
            <Button buttonType={Type.BLOG} onClick={toggleNewBlog} text='Create new blog' />
            <ReactModal isOpen={newBlog && user !== undefined}>
                <h1>create a new  blog</h1>
                <Button buttonType={Type.EXIT} text="X" onClick={toggleNewBlog}></Button>
                <label htmlFor="blog title" >Blog title:</label>
                <input id="blog title" onChange={textBlogTitle} onKeyDown={keyPress} placeholder='Blog title'></input>
                {(blogTitle.current) && <Button buttonType={Type.SAVE} text="SAVE" onClick={newBlogAdd}></Button>}
            </ReactModal>
        </div>

    )
}