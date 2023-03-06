import { IPost } from "../../../services/PostService"
import { IBaseActionType, IObjectStringList } from "../../../tools/types"



export type AddPostActionType = IBaseActionType & {
    payload: IPost[] | IObjectStringList | number
}

export type MyPostStateType = {
    myPosts: IPost[] | null
    errors: IObjectStringList | null
    totalMyPostsCount?: number
}
