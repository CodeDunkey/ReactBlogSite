import { User } from "../../../Types/Types"

export let Users: User[] = [
    {
        userId: 1,
        userName: "jj",
        createdDateTime: new Date().toLocaleString(),
        email: "john@john.com",
        password: "jj",
        firstName: "John",
        lastName: "Johnson",
        blog: [
            {
                userName: "jj",
                blogTitle: "My cars",
                post: [
                    {
                        userName: "jj", 
                        postTitle: "First Post",
                        headLine: "Johns world",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae molestiae deserunt totam cumque iste perferendis asperiores dolorem dolore? Quas.",
                        dateTimeStamp: new Date().toLocaleString()
                    },
                    {
                        userName: "jj",
                        postTitle: "Second post",
                        headLine: "Second post from Johns world",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae molestiae deserunt totam cumque iste perferendis asperiores dolorem dolore? Quas.",
                        dateTimeStamp: new Date().toLocaleString()
                    },
                ],
            }
        ],
    },
    {
        userId: 2,
        userName: "ee",
        email: "elsa@elsa.com",
        password: "ee",
        createdDateTime: new Date().toLocaleString(),
        firstName: "Elsa",
        lastName: "Elsason",
        blog: [
            {
                userName: "ee",
                blogTitle: "My computers",
                post: [
                    {
                        userName: "ee",
                        postTitle: "First Post",
                        headLine: "First post from Elsas world",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae molestiae deserunt totam cumque iste perferendis asperiores dolorem dolore? Quas.",
                        dateTimeStamp: new Date().toLocaleString()
                    },
                    {
                        userName: "ee",
                        postTitle: "Second post",
                        headLine: "Second post from Elsas world",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae molestiae deserunt totam cumque iste perferendis asperiores dolorem dolore? Quas.",
                        dateTimeStamp: new Date().toLocaleString()
                    },
                ],
            }
        ],
    },
    {
        userId: 3,
        userName: "ww",
        email: "bob@bob.com",
        password: "ww",
        createdDateTime: new Date().toLocaleString(),
        firstName: "Bob",
        lastName: "Bobson",
        blog: [
            {
                userName: "ww",
                blogTitle: "My hobbies",
                post: [
                    {
                        userName: "ww",
                        postTitle: "First Post",
                        headLine: "First post from Bobs world",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae molestiae deserunt totam cumque iste perferendis asperiores dolorem dolore? Quas.",
                        dateTimeStamp: new Date().toLocaleString()
                    },
                    {
                        userName: "ww",
                        postTitle: "Second post",
                        headLine: "Second post from Bobs world",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae molestiae deserunt totam cumque iste perferendis asperiores dolorem dolore? Quas.",
                        dateTimeStamp: new Date().toLocaleString()
                    },
                ],
            },
            {
                userName: "ww",
                blogTitle: "My second blog",
            },
        ],
    },
    {
        userId: 4,
        userName: "no",
        email: "no@no.com",
        password: "no",
        createdDateTime: new Date().toLocaleString(),
        firstName: "no",
        lastName: "nono",
    },
]

// export let Blogs: Blog[]

// potst

// comments 