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
    },
    {
        userId: 2,
        userName: "ee",
        email: "elsa@elsa.com",
        password: "ee",
        createdDateTime: new Date().toLocaleString(),
        firstName: "Elsa",
        lastName: "Elsason",  
    },
    {
        userId: 3,
        userName: "ww",
        email: "bob@bob.com",
        password: "ww",
        createdDateTime: new Date().toLocaleString(),
        firstName: "Bob",
        lastName: "Bobson",
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