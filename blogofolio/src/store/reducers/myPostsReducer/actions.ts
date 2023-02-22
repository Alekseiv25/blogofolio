import { createNewMyPost, IPost } from "../../../services/PostService";
import { refreshTokenAsyncAction } from "../auth/actions";
import { AppDispatch, AppState } from "../../store";
import { ADD_MY_POSTS_FAILED, ADD_MY_POSTS_SUCCESS } from "./constants";
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

export const createNewPostAsyncAction = (formData: FormData): any => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const accessToken = getState().auth.tokens?.access
        if (!accessToken) {
            throw new Error('No access Token')
        }
        const result = await createNewMyPost(accessToken, formData)
        if (result.ok) {
            // dispatch(addPostsSuccessAction(result.data))
        } else if (result.status === 401) {
            await dispatch(refreshTokenAsyncAction())
            await dispatch(createNewPostAsyncAction(formData))
        } else {
            console.log(result.data);
            throw new Error(result.data)
        }
    }
}
