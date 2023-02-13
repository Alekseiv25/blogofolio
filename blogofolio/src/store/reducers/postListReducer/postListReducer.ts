import {
    ADD_TO_FAVOURITES,
    defaultState,
    GET_OVERALL_POSTS_COUNT,
    LOAD_POSTS,
} from "./constants";
import { IPostListAction, IPostsListState } from "./types";

// export const postListReducer = state;
const postListReducer = (
    state: IPostsListState = defaultState,
    action: IPostListAction
): IPostsListState => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: [...action.posts],
            };
        case GET_OVERALL_POSTS_COUNT:
            return {
                ...state,
                totalPostsCount: action.totalPostsCount,
            };
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                myFavouritePosts: [...state.myFavouritePosts],
            };
        default:
            return state;
    }
};

export default postListReducer;