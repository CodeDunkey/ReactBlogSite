import { User } from "../../../Types/Types"

export let Users: User[] = [
    {
        userId: Math.random(),
        userName: "John123",
        createdDateTime: new Date().toLocaleString(),
        firstName: "John",
        lastName: "Johnson",
    },
    {
        userId: Math.random(),
        userName: "Elsa123",
        createdDateTime: new Date().toLocaleString(),
        firstName: "Elsa",
        lastName: "Elsason",
    },
    {
        userId: Math.random(),
        userName: "Bob123",
        createdDateTime: new Date().toLocaleString(),
        firstName: "Bob",
        lastName: "Bobson",
    },
   
]