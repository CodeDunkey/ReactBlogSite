import { Button, Type } from "../../../Button/Button"
export const NewBlog = () => {
    const newBlog = () => {

    }
    return (
        <Button buttonType={Type.BLOG} onClick={newBlog} text='Create new blog' />
    )
}