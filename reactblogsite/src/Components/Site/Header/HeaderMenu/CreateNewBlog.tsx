import { useState, useRef, KeyboardEvent, ChangeEvent } from "react"
import ReactModal from "react-modal"
import { Button, Type } from "../../../Button/Button"
import { useUserContext } from "../../../../Hooks/Context/useContext/useUserContext"
import { useLogInSignUp } from "../../../../Hooks/Context/useContext/useLogInSignUpContext"
import { useAddNewBlog } from "../../../../Hooks/useAddNewBlog"
import { Blog, Post, User } from "../../../../Types/Types"

export const CreateNewBlog = () => {
    const [newBlog, setNewBlog] = useState<boolean>(false)
    const { user, setUser } = useUserContext()
    const { keyDown, setKeyDown } = useLogInSignUp()
    const { addNewBlog } = useAddNewBlog()
    let blogTitle = useRef<string>()
    let postTitle = useRef<string>()
    let inputEmail = useRef<string>()
    let inputFirstName = useRef<string>()
    let inputLastName = useRef<string>()
    const toggleNewBlog = () => {
        if (!user) {
            alert("You must be logged in to create a blog");
            // setNewBlog(false)
        }
        if (user) {
            setNewBlog(!newBlog)
            blogTitle.current = undefined;
            postTitle.current = undefined;
        }
    }
    
    const newBlogAdd = async () => {

        let addBlogToUser;
        // console.log("addBlogToUser in newBlog: ", addBlogToUser)
        if (blogTitle.current !== undefined && user) {
            addBlogToUser = undefined
            console.log("addBlogToUser after being undefined: ", addBlogToUser)
            let blog: Blog = {
                userName: user.userName,
                blogTitle: blogTitle.current,
                // post?: newPost, 
            }
            // let newPost: Post = {
            //     userName: user.userName,
            //     blogTitle: blogTitle.current,
            //     postTitle: "",
            //     headLine: "",
            //     text: "",
            //     dateTimeStamp: new Date().toLocaleString(),
            // }
            addBlogToUser = await addNewBlog({ blog: blog, userName: user.userName })
            // console.log("addBlogToUser after being initialised: ", addBlogToUser)

            if (addBlogToUser !== undefined){
                // console.log("works")
                // console.log("user === addBlogToUser in newBlogAdd", user === addBlogToUser )
                setUser({...addBlogToUser})
            }
        }
        
        // console.log("addNewBlogAndReturnUser:", addBlogToUser)
        
        blogTitle.current = undefined;
        postTitle.current = undefined;
        
        
        // activates the modal
        setNewBlog(!newBlog)
        

    }
    // console.log("user in newBlog: ", user)


    const keyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        setKeyDown(event.key)
    }
    const textBlogTitle = (x: ChangeEvent<HTMLInputElement>) => {
        blogTitle.current = x.target.value;
    }
    // const textPostTitle = (x: ChangeEvent<HTMLInputElement>) => {
    //     postTitle.current = x.target.value
    // }
    // const textinputEmail = (x: ChangeEvent<HTMLInputElement>) => {
    //     .current = x.target.value;
    // }
    // const textinputFirstName = (x: ChangeEvent<HTMLInputElement>) => {
    //     .current = x.target.value
    // }
    // const textinputLastName = (x: ChangeEvent<HTMLInputElement>) => {
    //     .current = x.target.value;
    // }

    return (
        <div>
            <Button buttonType={Type.BLOG} onClick={toggleNewBlog} text='Create new blog' />
            <ReactModal isOpen={newBlog && user !== undefined}>
                <h1>create a new  blog</h1>
                <Button buttonType={Type.EXIT} text="X" onClick={toggleNewBlog}></Button>
                <label htmlFor="blog title" >Blog title:</label>
                <input id="blog title" onChange={textBlogTitle} onKeyDown={keyPress} placeholder='Blog title'></input>
                {/*<br></br>
                <label htmlFor="post title" >Post title</label>
                <input id="post title" onChange={textPostTitle} onKeyDown={keyPress} placeholder='Post title'></input>
                 <br></br>
                <label htmlFor="email" >Email</label>
                <input id="email" onChange={textinputEmail} onKeyDown={keyPress} placeholder='Email'></input>
                <br></br>
                <label htmlFor="first name" >First name</label>
                <input id="first name" onChange={textinputFirstName} onKeyDown={keyPress} placeholder='First name'></input>
                <br></br>
                <label htmlFor="Last name" >Last name</label>
                <input id="Last name" onChange={textinputLastName} onKeyDown={keyPress} placeholder='Last name'></input> */}

                {(blogTitle.current) && <Button buttonType={Type.SAVE} text="SAVE" onClick={newBlogAdd}></Button>}
            </ReactModal>
        </div>

    )
}