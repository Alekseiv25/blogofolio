import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostListAsyncAction } from "../../store/reducers/postListReducer/postListAction";
import { AppState } from "../../store/store";
import PostlistView from "./PostListView";
const currentPageSelector = (state: AppState) =>
    state.pagination.currentPage;

const pageSizeSelector = (state: AppState) => state.postList.pageSize;

const postsSelector = (state: AppState) => state.postList.posts;
const PostList = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(currentPageSelector);
    const postsPerPage = useSelector(pageSizeSelector);
    const posts = useSelector(postsSelector);

    const take = currentPage === 1 ? postsPerPage - 1 : postsPerPage;
    const skip = currentPage === 1 ? 0 : take * currentPage - 13 
    useEffect(() => {
        dispatch(loadPostListAsyncAction(take, skip));
    }, [take, skip, dispatch]);

    const mainPost = currentPage === 1 ? posts.slice(0, 1) : [];
    const bottomPost =
        currentPage === 1 ? posts.slice(1, 5) : posts.slice(0, 6);
    const asidePost =
        currentPage === 1 ? posts.slice(5, 11) : posts.slice(6, 12);
    // if (!posts.length) {
    //     return <LoadSpinner />
    // }
    return (
        <PostlistView
            mainPost={mainPost}
            bottomPost={bottomPost}
            asidePost={asidePost} />
    )
}


export default PostList