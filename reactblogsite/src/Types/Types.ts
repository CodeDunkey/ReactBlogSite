export interface Comment {
    userName: string,
    blogTitle: string,
    postTitle: string,
    fromUser: string,
    
    comment: string,
    dateTimeStamp: string,
}
export interface Post {
    userName: string,
    blogTitle: string,
    dateTimeStamp: string
    postTitle: string,
    text: string,
}
export interface Blog {
    userName: string,
    blogTitle: string,
    post?: Post[],
}
export interface User {
    userId: number,
    createdDateTime: string
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    userName: string,
}
