import { Users } from "./Users";
import { Blogs } from "./Blogs";
import { Posts } from "./Posts";
import { Comments } from "./Comments";
import {User, Blog, Post, Comment} from "./../../../Types/Types";

class Database {
    users: User[];
    blogs: Blog[];
    posts: Post[];
    comments: Comment[];
    constructor() {
        this.users = [...Users];
        this.blogs = [...Blogs];
        this.posts = [...Posts];
        this.comments = [...Comments];
    }
}

export const database = new Database();