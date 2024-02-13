import { User } from "../../../Types/Types"

export let Users: User[] = [
    {
        userId: Math.random(),
        userName: "John123",
        createdDateTime: new Date().toLocaleString(),
        email: "john@joohn.com",
        password: "John123",
        firstName: "John",
        lastName: "Johnson",
    },
    {
        userId: Math.random(),
        userName: "Elsa123",
        email: "elsa@elsa.com",
        password: "Elsa123",
        createdDateTime: new Date().toLocaleString(),
        firstName: "Elsa",
        lastName: "Elsason",
    },
    {
        userId: Math.random(),
        userName: "Bob123",
        email: "bob@bob.com",
        password: "Bob123",
        createdDateTime: new Date().toLocaleString(),
        firstName: "Bob",
        lastName: "Bobson",
    },
   
]