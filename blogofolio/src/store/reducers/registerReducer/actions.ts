import activateUser from "../../../services/activateUser/activateUser";
import registerUser from "../../../services/registerService/registerService";
import { IPost } from "../../../services/PostService";
import { AppDispatch } from "../../store";
import {
    ACTIVATION_FAILED,
    ACTIVATION_SUCCESS,
    ADD_TO_FAVORITES,
    DELETE_FROM_FAVORITES,
    REGISTRATION_FAILED,
    REGISTRATION_SUCCESS,
} from "./constants";
import {
    ILoadUserRegisterActionType,
    IObjectStringList,
    IUserType,
} from "./types";

const loadUserRegisterAction = (
    user: IUserType
): ILoadUserRegisterActionType => {
    return { type: REGISTRATION_SUCCESS, payload: user };
};

const errorRegistrationUserAction = (errors: IObjectStringList) => {
    return {
        type: REGISTRATION_FAILED,
        payload: errors,
    };
};

const registerUserAsyncAction = (
    username: string,
    email: string,
    password: string,
    cb: () => void
): any => {
    return async (dispatch: AppDispatch) => {
        const result = await registerUser(username, email, password);
        if (result.ok) {
            dispatch(loadUserRegisterAction(result.data as IUserType));
            cb();
        } else {
            dispatch(errorRegistrationUserAction(result.data));
        }
    };
};

const activationSuccessAction = (): ILoadUserRegisterActionType => {
    return {
        type: ACTIVATION_SUCCESS,
        payload: {}
    }
}

const activationFailedAction = (
    errors: IObjectStringList
): ILoadUserRegisterActionType => {
    return {
        type: ACTIVATION_FAILED,
        payload: errors
    }
}

const activateUserAsyncAction = (
    uid: string,
    token: string,
    cb: () => void
): any => {
    return async (dispatch: AppDispatch) => {
        const result = await activateUser(uid, token);

        if (result.status === 204) {
            dispatch(activationSuccessAction());
            cb();
        } else {
            dispatch(activationFailedAction(result.data));
        }
    };
};

const addToFavoritesPostsAction = (post: IPost) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: post,
    };
};
const deleteFromFavoritesPostsAction = (id: number) => {
    return {
        type: DELETE_FROM_FAVORITES,
        payload: id,
    };
};

export {
    registerUserAsyncAction,
    activationSuccessAction,
    activationFailedAction,
    activateUserAsyncAction,
    addToFavoritesPostsAction,
    deleteFromFavoritesPostsAction,
};