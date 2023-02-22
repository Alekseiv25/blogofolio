import { getUser } from "../../../services/getUser/getUser";
import { IObjectStringList } from "../../../tools/types";
import { AppDispatch, AppState } from "../../store";
import { GET_USER_FAILED, GET_USER_SUCCESS } from "./constants";
import { GetUserActionType, IUser } from "./types";

export const getUserSuccessAction = (user: IUser): GetUserActionType => ({
    type: GET_USER_SUCCESS,
    payload: user
})

export const getUserFailedACtion = (errors: IObjectStringList): GetUserActionType => ({
    type: GET_USER_FAILED,
    payload: errors
})


export const getUserAsyncAction = (): any => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const accessToken = getState().auth.tokens?.access
        console.log(accessToken);

        if (!accessToken) {
            console.log('No access');
            throw new Error()
        }
        const result = await getUser(accessToken)
        if (result.ok) {
            dispatch(getUserSuccessAction(result.data))
        } else {
            console.log(result.data);
            throw new Error(result.data)

        }
    }
}

