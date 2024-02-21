export interface Comment {
    comment: string,
    userId: number,
    DateTimeStamp: string
}
export interface Post {
    headLine: string,
    text: string,
    userId: number,
    DateTimeStamp: string
}
export interface User {
    userId: number,
    createdDateTime: string
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    userName: string,
    blogName?: string,
    post?: Post[],
    comments?: Comment[],
}