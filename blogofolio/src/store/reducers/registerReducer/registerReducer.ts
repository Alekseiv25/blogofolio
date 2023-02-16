import { IPost } from "../../../services/PostService";
import {
    ACTIVATION_FAILED,
    ACTIVATION_SUCCESS,
    ADD_TO_FAVORITES,
    defaultState,
    DELETE_FROM_FAVORITES,
    REGISTRATION_FAILED,
    REGISTRATION_SUCCESS,
} from "./constants";
import {
    IRegisterState,
    ILoadUserRegisterActionType,
    IUserType,
    IObjectStringList,
} from "./types";

const registerReducer = (
    state: IRegisterState = defaultState,
    action: ILoadUserRegisterActionType
): IRegisterState => {
    switch (action.type) {
        case REGISTRATION_SUCCESS:
            const loadUser = action.payload as IUserType;
            return {
                ...state,
                isRegistered: true,
                user: loadUser,
                errors: undefined,
            };
        case REGISTRATION_FAILED:
            const errors = action.payload as IObjectStringList;
            return {
                ...state,
                isRegistered: false,
                user: undefined,
                errors: errors,
            };
        case ACTIVATION_SUCCESS:
            return {
                ...state,
                isActivated: true,
            };
        case ACTIVATION_FAILED:
            return {
                ...state,
                isActivated: false,
                errors: action.payload as IObjectStringList,
            };
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favoritesPosts: [...state.favoritesPosts, action.payload as IPost],
            };
        case DELETE_FROM_FAVORITES:
            const filterPosts = state.favoritesPosts.filter(
                (post) => post.id !== action.payload
            );
            return {
                ...state,
                favoritesPosts: [...filterPosts],
            };
        default:
            return state;
    }
};


export default registerReducer