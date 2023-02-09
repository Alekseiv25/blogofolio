import { getAllPosts, IPost } from "../../../services/PostService";
import { AppDispatch } from "../../store";
import { IPostListAction } from "./postListReducer";
import { LOAD_POSTS } from "./postListReducer";

export const loadPostListAction = (posts: IPost[]): IPostListAction => {
    return {
        type: LOAD_POSTS,
        posts,
    };
};

export const loadPostListAsyncAction = (limit: number, offset: number): any => {
    return (dispatch: AppDispatch) => {
        getAllPosts(limit, offset).then((posts) => {
            dispatch(loadPostListAction(posts));
        });
    };
};