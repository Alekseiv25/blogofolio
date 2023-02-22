import { IBaseActionType, IObjectStringList } from "../../../tools/types"

export interface IUser {
    username: string | any
}


export type GetUserActionType = IBaseActionType & {
    payload: IUser | IObjectStringList
}

export type GetUserStateType = {
    user: IUser | null
    errors: IObjectStringList | null
}
