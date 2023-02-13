import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPost } from "../../services/PostService";
import { loadPostListAsyncAction } from "../../store/reducers/postListReducer/postListAction";
import { AppState } from "../../store/store";
import { AsidePostItem } from "../PostItems/AsidePostItem";
import { BottomPostItem } from "../PostItems/BottomPostItem";
import { MainPostItem } from "../PostItems/MainPostItem";
import styles from './styles.module.scss'


const currentPageSelector = (state: AppState) => state.pagination.currentPage;

const pageSizeSelector = (state: AppState) => state.postList.pageSize;

const postsSelector = (state: AppState) => state.postList.posts;


const PostList = () => {

    const dispatch = useDispatch();
    const currentPage = useSelector(currentPageSelector);
    const postsPerPage = useSelector(pageSizeSelector);

    const posts = useSelector(postsSelector);

    const take = currentPage === 0 ? postsPerPage - 1 : postsPerPage;
    const skip = take * currentPage - 1;

    useEffect(() => {
        dispatch(loadPostListAsyncAction(take, skip));
    }, [take, skip, dispatch]);

    const mainPost = currentPage === 0 ? posts.slice(0, 1) : [];
    const bottomPost = currentPage === 0 ? posts.slice(1, 5) : posts.slice(0, 6);
    const asidePost = currentPage === 0 ? posts.slice(5, 11) : posts.slice(6, 12);




    return (<div className={styles.posts}>
        <div className={styles.leftPosts}>
            <div className={styles.mainPost}>
                {mainPost.map((el: IPost) => (
                    <MainPostItem key={el.id} {...el} />
                ))
                }
            </div>
            <div className={styles.bottomPosts}>
                {bottomPost.map((el: IPost) => (
                    <BottomPostItem key={el.id}  {...el} />
                ))}
            </div></div>
        <aside className={styles.asidePosts}>
            {asidePost.map((el: IPost) => (
                <AsidePostItem key={el.id} {...el} />
            ))}
        </aside>
    </div>)
}


export default PostList