import { IObjectStringList } from "../../../tools/types"
import { defaultState, GET_USER_FAILED, GET_USER_SUCCESS } from "./constants"
import { GetUserActionType, GetUserStateType, IUser } from "./types"


const getUserReducer = (state: GetUserStateType = defaultState, action: GetUserActionType): GetUserStateType => {
    switch (action.type) {
        case GET_USER_SUCCESS: return {
            user: action.payload as IUser,
            errors: null
        }
        case GET_USER_FAILED: return {
            user: null,
            errors: action.payload as IObjectStringList
        }
        default: return state
    }
}

export default getUserReducer