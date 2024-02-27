import { useUser } from "../../../Hooks/useUser";

export const MyPosts = () => {
    const { user } = useUser();
    // console.log("user in Main", user)
    let myPosts;
    if (user !== undefined) {
        myPosts = user.blog?.map((blog) => {
            let posts = blog.post?.map((post) => {
                return post.text
            })
            return (
                <div className='myPosts'>
                    <h2>{blog.blogTitle}</h2>
                    <p>{posts}</p>

                </div>
            )
        })
    }
    return (
        <div>
            Here is all your blogs
            <div >{myPosts}</div>
        </div>
    )
}