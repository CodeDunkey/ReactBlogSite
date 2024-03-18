export interface Comment {
    userName: string,
    blogTitle: string,
    blogIdNumber: number, //
    postTitle: string,
    postIdNumber: number, //
    comment: string,
    commentIdNumber: number, // 
    fromUser: string,
    dateTimeStamp: string,
    commentToComment?: Comment[],
}
export interface Post {
    userName: string,
    blogTitle: string,
    blogIdNumber: number, //
    postTitle: string,
    postIdNumber: number, //
    dateTimeStamp: string,
    text: string,
}
export interface Blog {
    userName: string,
    blogTitle: string,
    blogIdNumber: number, //
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
