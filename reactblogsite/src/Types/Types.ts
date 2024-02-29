export interface Comment {
    userName: string,
    dateTimeStamp: string,
    comment: string,
}
export interface Post {
    userName: string,
    dateTimeStamp: string
    postTitle: string,
    headLine: string,
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
    blog?: Blog[],
    comments?: Comment[],
}

