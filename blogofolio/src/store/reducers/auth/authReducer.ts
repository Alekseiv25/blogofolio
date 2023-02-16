import { defaultState, GET_TOKEN_FAILED, GET_TOKEN_SUCCESS } from "./constants";
import { AuthUserActionType, IObjectStringList, IState, TokenDto } from "./types";



export const authReducer = (state: IState = defaultState, action: AuthUserActionType): IState => {
    switch (action.type) {
        case GET_TOKEN_SUCCESS: {
            return {
                ...state,
                tokens: action.payload as TokenDto,
                errors: null,
            };
        }
        case GET_TOKEN_FAILED: {
            return {
                ...state,
                tokens: null,
                errors: action.payload as IObjectStringList,
            };
        }
        default:
            return state;
    }
};