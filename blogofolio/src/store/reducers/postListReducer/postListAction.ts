
import { getAllPosts, getPostsCount, IPost } from "../../../services/PostService";
import { AppDispatch } from "../../store";
import {
    ADD_TO_FAVOURITES,
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
            dispatch(loadPostListAction(posts));
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

const addToFavouritesPosts = (id: number) => {
    return {
        type: ADD_TO_FAVOURITES,
        id,
    };
};

export {
    loadPostListAsyncAction,
    loadTotalPostsCountAsyncAction,
    addToFavouritesPosts,
};