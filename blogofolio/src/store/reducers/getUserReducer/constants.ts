import { GetUserStateType } from "./types"

export const GET_USER_SUCCESS = "ADD_MY_POSTS_SUCCESS"
export const GET_USER_FAILED = "ADD_MY_POSTS_FAILED"

export const defaultState: GetUserStateType = {
    user: null,
    errors: null
}