import { IPost } from "../../../services/PostService"
import { IBaseActionType, IObjectStringList } from "../../../tools/types"



export type AddPostActionType = IBaseActionType & {
    payload: IPost[] | IObjectStringList
}

export type MyPostStateType = {
    myPosts: IPost[] | null
    errors: IObjectStringList | null
}
