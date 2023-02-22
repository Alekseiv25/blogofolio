import { IPost } from "../../../services/PostService"
import { IBaseActionType, IObjectStringList } from "../../../tools/types";



interface ILoadUserRegisterActionType extends IBaseActionType {
    payload: IUserType | IObjectStringList | IPost | IPost[] | number;
}

interface IUserType {
    username: string;
    email: string;
    id: number;
    favoritesPosts: IPost[];
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