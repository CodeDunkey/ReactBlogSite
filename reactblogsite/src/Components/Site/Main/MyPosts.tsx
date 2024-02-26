import { useUser } from "../../../Hooks/useUser";

export const MyPosts = () => {
    const { user } = useUser();
    // console.log("user in Main", user)
    let myPosts;
    if (user !== undefined) {
        myPosts = user.post?.map((post) => {
            return (
                <>
                    <h2>{post.headLine}</h2>
                    <p>{post.text}</p>
                </>
            )
        })
    }
    return (
        <div>
            <div className='myPosts'>{myPosts}</div>
            <div>itaque possimus eum ducimus alias, necessitatibus illo, autem reiciendis! Deserunt at fugit animi a provident consectetur facere, quasi, aperiam ducimus modi, culpa eos vel commodi earum dolores?</div>
        </div>
        // { myPosts }
    )
}