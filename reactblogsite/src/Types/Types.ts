export interface Comment {
    userName: string,
    blogTitle: string,
    blogIdNumber: number, // #1
    postTitle: string,
    postIdNumber: number, // #2
    comment: string,
    commentIdNumber: number, // #3 
    fromUser: string,
    dateTimeStamp: string,
    commentToComment?: Comment[],
}
export interface Post {
    userName: string,
    blogTitle: string,
    blogIdNumber: number, // #1
    postTitle: string,
    postIdNumber: number, // #2
    dateTimeStamp: string,
    text: string,
}
export interface Blog {
    userName: string,
    blogTitle: string,
    blogIdNumber: number, // #1
}
export interface User {
    userId: number,
    createdDateTime: string
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    userName: string, //
}
