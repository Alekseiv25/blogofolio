
import { IPost } from "../../../services/PostService";
import { IObjectStringList } from "../../../tools/types";
import { ADD_MY_POSTS_FAILED, ADD_MY_POSTS_SUCCESS, defaultState } from "./constants";
import { AddPostActionType, MyPostStateType } from "./types";

const myPostsReducer = (state: MyPostStateType = defaultState, action: AddPostActionType): MyPostStateType => {
    switch (action.type) {
        case ADD_MY_POSTS_SUCCESS: return {
            myPosts: action.payload as IPost[],
            errors: null
        }
        case ADD_MY_POSTS_FAILED: return {
            myPosts: null,
            errors: action.payload as IObjectStringList
        }
        default: return state
    }
}

export default myPostsReducer