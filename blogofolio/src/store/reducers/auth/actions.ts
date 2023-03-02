import getTokensUser from "../../../services/auth/auth";
import { getUser } from "../../../services/getUser/getUser";
import fetchRefreshToken from "../../../services/refreshToken/refreshToken"
import { IBaseActionType } from "../../../tools/types";
import { AppDispatch, AppState } from "../../store";
import { IUserType } from "../registerReducer/types";
import { GET_TOKEN_FAILED, GET_TOKEN_SUCCESS, GET_USER, SIGN_OUT } from "./constants";
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

export const getUserAction = (user: IUserType) => {
    return {
        type: GET_USER,
        payload: user
    }
}

export const getUserAsyncAction = (email: string, password: string): any => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        await dispatch(getTokensAsyncAction(email, password))
        const accessToken = getState().auth.tokens?.access
        if (accessToken === undefined) {
        } else {
            const userInfo = await getUser(accessToken)
            dispatch(getUserAction(userInfo.data))
        }
        const userData = getState().auth.user?.username

        if (userData === undefined) {
        }
    }
}

export const signOutAction = (): IBaseActionType => {
    return {
        type: SIGN_OUT
    }
}