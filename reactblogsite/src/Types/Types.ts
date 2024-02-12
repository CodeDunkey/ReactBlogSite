export interface Comment {
    comment: string,
    userId: number,
    DateTimeStamp: string
}
export interface Post {
    post: string,
    userId: number,
    DateTimeStamp: string
}
export interface User {
    userId: number,
    createdDateTime: string
    firstName: string,
    lastName: string,
    userName: string,
    blogName?: string,
    post?: Post[],
    comments?: Comment[],
}