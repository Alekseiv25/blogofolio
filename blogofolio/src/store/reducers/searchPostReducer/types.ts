import { IPost } from '../../../services/PostService'
interface IBaseActionType {
    type: string;
}

interface ISearchPostsListState {
    searchPosts: IPost[];
    totalSearchPostsCount: number;
    pageSize: number;
}

interface ISearchPostsListGetPostsAction extends IBaseActionType {
    posts: IPost[];
}
interface ISearchPostsListGetPostsCountAction extends IBaseActionType {
    totalSearchPostsCount: number;
}

export type {
    ISearchPostsListState,
    ISearchPostsListGetPostsAction,
    ISearchPostsListGetPostsCountAction,
};