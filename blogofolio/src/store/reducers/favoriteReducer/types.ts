import { IPost } from "../../../services/PostService";
import { IBaseActionType } from "../../../tools/types";

interface IFavoriteActionType extends IBaseActionType {
    payload:  IPost | IPost[] | number;
}

interface IFavoriteType {
    id: number;
    favoritesPosts: IPost[];
}



interface IFavoriteListState {
    favoritesPosts: IPost[];
}

export type {
    IFavoriteActionType,
    IFavoriteType,
    IFavoriteListState ,
};