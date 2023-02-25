
import { getAllPosts, getPostsCount, IPost } from "../../../services/PostService";
import { AppDispatch } from "../../store";
import {
    GET_OVERALL_POSTS_COUNT,
    LOAD_POSTS,
} from "./constants";
import { IPostListAction } from "./types";

const loadPostListAction = (posts: IPost[]): IPostListAction => {
    return {
        type: LOAD_POSTS,
        posts,
    };
};

const loadPostListAsyncAction = (limit: number, offset: number): any => {
    return (dispatch: AppDispatch) => {
        getAllPosts(limit, offset).then((posts) => {
            const upgradePosts = posts.map((post: IPost) => {
                return { ...post, likes: 0, dislikes: 0 }
            });
            dispatch(loadPostListAction(upgradePosts));
        });
    };
};

const loadTotalPostsCountAction = (totalPostsCount: number) => {
    return {
        type: GET_OVERALL_POSTS_COUNT,
        totalPostsCount,
    };
};

const loadTotalPostsCountAsyncAction = (): any => {
    return (dispatch: AppDispatch) => {
        getPostsCount().then((totalPostsCount) => {
            dispatch(loadTotalPostsCountAction(totalPostsCount));
        });
    };
};

export {
    loadPostListAsyncAction,
    loadTotalPostsCountAsyncAction,
    loadTotalPostsCountAction,
};