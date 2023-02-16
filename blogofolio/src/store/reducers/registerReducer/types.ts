import { IPost } from "../../../services/PostService"

interface BaseActionType {
    type: string;
}

interface ILoadUserRegisterActionType extends BaseActionType {
    payload: IUserType | IObjectStringList | IPost | IPost[] | number;
}

interface IUserType {
    username: string;
    email: string;
    id: number;
    favoritesPosts: IPost[];
}

interface IObjectStringList {
    [key: string]: string[];
}

interface IRegisterState {
    isRegistered: boolean;
    user?: IUserType;
    errors?: IObjectStringList;
    isActivated: boolean;
    favoritesPosts: IPost[];
}

export type {
    ILoadUserRegisterActionType,
    IUserType,
    IRegisterState,
    IObjectStringList,
};