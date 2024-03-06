import { useState } from 'react'
import ReactModal from 'react-modal';
import { Button } from '../Button/Button';
import { Type } from '../Button/Button';
import './CreateNewPost.scss'
export const CreateNewPost = () => {
    const [newPost, setNewPost] = useState<boolean>(false);
    const toggleNewPost = () => {
        setNewPost(!newPost)
    }
    return (
        <div>
            <Button text='Create new post' buttonType={Type.POST} onClick={toggleNewPost} />
            <ReactModal isOpen={newPost}>
                <Button buttonType={Type.EXIT} text="X" onClick={toggleNewPost}></Button>
                <h1>create a new  post</h1>
            </ReactModal>
        </div>
    )
}