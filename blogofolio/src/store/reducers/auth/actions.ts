import getTokensUser from "../../../services/auth/auth";
import fetchRefreshToken from "../../../services/refreshToken/refreshToken"
import { AppDispatch, AppState } from "../../store";
import { GET_TOKEN_FAILED, GET_TOKEN_SUCCESS } from "./constants";
import { AuthUserActionType, IObjectStringList, TokenDto } from "./types";

export const getTokensSuccessAction = (
    tokens: TokenDto
): AuthUserActionType => {
    return {
        type: GET_TOKEN_SUCCESS,
        payload: tokens,
    };
};

export const getTokensFailedAction = (
    errors: IObjectStringList
): AuthUserActionType => {
    return {
        type: GET_TOKEN_FAILED,
        payload: errors,
    };
};

export const getTokensAsyncAction = (email: string, password: string): any => {
    return async (dispatch: AppDispatch) => {
        const result = await getTokensUser(email, password);
        //   console.log("activation result :", result);

        if (result.ok) {
            dispatch(getTokensSuccessAction(result.data));
        } else {
            dispatch(getTokensFailedAction(result.data));
        }
    };
};

export const refreshTokenAsyncAction = (): any => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const refreshToken = getState().auth.tokens?.refresh
        if (!refreshToken) {
            console.log('No refreshToken')
            throw new Error()
        }

        const result = await fetchRefreshToken(refreshToken)
        if (result.ok) {
            dispatch(getTokensSuccessAction({
                access: result.data,
                refresh: refreshToken
            }))
        }
    }
}