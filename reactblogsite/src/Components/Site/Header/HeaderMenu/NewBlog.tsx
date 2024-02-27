import { useState, useRef, KeyboardEvent, ChangeEvent } from "react"
import ReactModal from "react-modal"
import { Button, Type } from "../../../Button/Button"
import { useUser } from "../../../../Hooks/useUser"
import { useLogInSignUp } from "../../../../Hooks/useLogInSignUp"
import { Blog, Post } from "../../../../Types/Types"
import { click } from "@testing-library/user-event/dist/click"
import { clientApi } from "../../../../Utilities/ClientAPI"
export const NewBlog = () => {
    const [newBlog, setNewBlog] = useState<boolean>(false)
    const { user } = useUser()
    const {keyDown, setKeyDown} = useLogInSignUp()

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
    
    const addNewBlog = () => {
        if( blogTitle.current !== undefined && user){
            let newPost: Post = {
                userName: user.userName,
                postTitle: "",
                headLine: "",
                text: "",
                dateTimeStamp: new Date().toLocaleString(),
            }
            let newBlog: Blog = {
                userName: user.userName,
                blogTitle: blogTitle.current,
                // post?: newPost, 
            }
            clientApi.addNewBlog(newBlog, user.userName)
        }
        blogTitle.current = undefined;
        postTitle.current = undefined;
        setNewBlog(!newBlog)

    }
    console.log(blogTitle)
    const keyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        setKeyDown(event.key)
    }
    const textBlogTitle = (x: ChangeEvent<HTMLInputElement>) => {
        blogTitle.current = x.target.value;
    }
    const textPostTitle = (x: ChangeEvent<HTMLInputElement>) => {
        postTitle.current = x.target.value
    }
    // const textinputEmail = (x: ChangeEvent<HTMLInputElement>) => {
    //     .current = x.target.value;
    // }
    // const textinputFirstName = (x: ChangeEvent<HTMLInputElement>) => {
    //     .current = x.target.value
    // }
    // const textinputLastName = (x: ChangeEvent<HTMLInputElement>) => {
    //     .current = x.target.value;
    // }
    console.log(newBlog)
    return (
        <div>
            <Button buttonType={Type.BLOG} onClick={toggleNewBlog} text='Create new blog' />
            <ReactModal isOpen={newBlog && user !== undefined}>
                <h1>create a new  blog</h1>
                <Button buttonType={Type.EXIT} text="X" onClick={toggleNewBlog}></Button>
                <label htmlFor="blog title" >Blog title:</label>
                <input id="blog title" onChange={textBlogTitle} onKeyDown={keyPress} placeholder='Blog title'></input>
                <br></br>
                <label htmlFor="post title" >Post title</label>
                <input id="post title" onChange={textPostTitle} onKeyDown={keyPress} placeholder='Post title'></input>
                {/* <br></br>
                <label htmlFor="email" >Email</label>
                <input id="email" onChange={textinputEmail} onKeyDown={keyPress} placeholder='Email'></input>
                <br></br>
                <label htmlFor="first name" >First name</label>
                <input id="first name" onChange={textinputFirstName} onKeyDown={keyPress} placeholder='First name'></input>
                <br></br>
                <label htmlFor="Last name" >Last name</label>
            <input id="Last name" onChange={textinputLastName} onKeyDown={keyPress} placeholder='Last name'></input> */}

            <Button buttonType={Type.SAVE} text="SAVE" onClick={addNewBlog}></Button>
            </ReactModal>
        </div>

    )
}