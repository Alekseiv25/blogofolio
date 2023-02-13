import { AnyAction } from "@reduxjs/toolkit";
import { IPost } from "../../../services/PostService";


export interface IPostsListState {
    posts: IPost[];
    totalPostsCount: number;
    myFavouritePosts: IPost[];
    pageSize: number;
}

export interface IPostListAction extends AnyAction {
    type: string;
    posts: IPost[];
}