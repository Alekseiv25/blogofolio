import { createNewMyPost, getMyPosts, IPost } from "../../../services/PostService";
import { refreshTokenAsyncAction } from "../auth/actions";
import { AppDispatch, AppState } from "../../store";
import { ADD_MY_POSTS_COUNT, ADD_MY_POSTS_FAILED, ADD_MY_POSTS_SUCCESS } from "./constants";
import { AddPostActionType } from "./types";
import { IObjectStringList } from "../registerReducer/types";

export const addPostsSuccessAction = (posts: IPost[]): AddPostActionType => ({
    type: ADD_MY_POSTS_SUCCESS,
    payload: posts
})

export const addPostFailedACtion = (errors: IObjectStringList): AddPostActionType => ({
    type: ADD_MY_POSTS_FAILED,
    payload: errors
})

export const addPostCountAction = (totalCount: number): AddPostActionType => ({
    type: ADD_MY_POSTS_COUNT,
    payload: totalCount
})
export const createNewPostAsyncAction = (formData: FormData, cb: () => void): any => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const accessToken = getState().auth.tokens?.access
        if (!accessToken) {
            throw new Error('No access Token')
        }
        const result = await createNewMyPost(accessToken, formData)
        if (result.ok) {
            dispatch(addPostsSuccessAction(result.data))
            cb()
        } else if (result.status === 401) {
            await dispatch(refreshTokenAsyncAction())
            console.log("refreshToken")
            await dispatch(createNewPostAsyncAction(formData, cb))
        } else {
            console.log(result.data);
            throw new Error(result.data)
        }
    }
}

export const getMyPostsAsyncAction = (limit: number, offset: number): any => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const accessToken = getState().auth.tokens?.access
        if (!accessToken) {
            throw new Error("no Access Token");
        }
        const result = await getMyPosts(accessToken, limit, offset)
        if (result.ok) {
            dispatch(addPostsSuccessAction(result.data.results))
            dispatch(addPostCountAction(result.data.count))
        } else if (result.status === 401) {
            await dispatch(refreshTokenAsyncAction())
            console.log("refreshToken")
            await dispatch(getMyPostsAsyncAction(limit, offset))
        } else {
            throw new Error(result.data)
        }
    };
};

