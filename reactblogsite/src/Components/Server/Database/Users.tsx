import { User } from "../../../Types/Types"

export let Users: User[] = [
    {
        userId: Math.random(),
        userName: "jj",
        createdDateTime: new Date().toLocaleString(),
        email: "john@john.com",
        password: "jj",
        firstName: "John",
        lastName: "Johnson",
        post: [
            {
                headLine: "First post from Johns world",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae molestiae deserunt totam cumque iste perferendis asperiores dolorem dolore? Quas.",
                userId: 1,
                DateTimeStamp: new Date().toLocaleString()
            }
        ],
    },
    {
        userId: Math.random(),
        userName: "ee",
        email: "elsa@elsa.com",
        password: "ee",
        createdDateTime: new Date().toLocaleString(),
        firstName: "Elsa",
        lastName: "Elsason",
        post: [
            {
                headLine: "First post from Elsas world",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae molestiae deserunt totam cumque iste perferendis asperiores dolorem dolore? Quas.",
                userId: 1,
                DateTimeStamp: new Date().toLocaleString()
            }
        ],
    },
    {
        userId: Math.random(),
        userName: "ww",
        email: "bob@bob.com",
        password: "ww",
        createdDateTime: new Date().toLocaleString(),
        firstName: "Bob",
        lastName: "Bobson",
        post: [
            {
                headLine: "First post from Bobs world",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae molestiae deserunt totam cumque iste perferendis asperiores dolorem dolore? Quas.",
                userId: 1,
                DateTimeStamp: new Date().toLocaleString()
            }
        ],
    },
]