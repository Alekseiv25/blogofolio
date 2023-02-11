import { AnyAction } from "@reduxjs/toolkit";
import { IPost } from "../../../services/PostService";

export const LOAD_POSTS = "LOAD_POSTS";

export interface IPostsListState {
    posts: IPost[];
}


export interface IPostListAction extends AnyAction {
    type: string;
    posts: IPost[];
}


const defaultState: IPostsListState = {
    posts: [],
}

const postListReducer = (state: IPostsListState = defaultState, action: IPostListAction): IPostsListState => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: [...action.posts],
            };

        default:
            return state;
    }
};

export default postListReducer;