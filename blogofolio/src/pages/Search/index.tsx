import { useEffect } from "react"
import { IPost } from "../../services/PostService"
import { SearchPost } from "../../components/SearchPost"
import styles from './Search.module.scss'
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { AppState } from "../../store/store"
import { loadSearchPostsListAsyncAction, loadTotalSearchPostsCountAsyncAction } from "../../store/reducers/searchPostReducer/actions"
import { Pagination } from "../../components/Pagination"

const totalSearchPostsCountSelector = (state: AppState) =>
    state.searchPostsList.totalSearchPostsCount;

const currentPageSelector = (state: AppState) =>
    state.pagination.currentPage;

const searchPostsSelector = (state: AppState) =>
    state.searchPostsList.searchPosts;


export const Search = () => {
    const getThemeSelector = (state: any) => state.theme
    const theme = useSelector(getThemeSelector)
    const location = useLocation();
    const searchText: string = location.state || "nothing";
    const dispatch = useDispatch()
    const currentPage = useSelector(currentPageSelector);
    const searchPostsList = useSelector(searchPostsSelector);
    const totalSearchPostsCount = useSelector(totalSearchPostsCountSelector);
    const take = 10;
    const skip = take * currentPage;

    useEffect(() => {
        dispatch(loadSearchPostsListAsyncAction(searchText, skip));
        dispatch(loadTotalSearchPostsCountAsyncAction(searchText));
    }, [dispatch, searchText, skip]);
    console.log(totalSearchPostsCount);



    if (!searchPostsList.length) {
        return (<div className={styles.container}>
            <p className={styles.notresult}>Not results</p>
        </div>
        )
    }

    return (
        <section>
            <input className={styles.input} style={theme} type='text' value={`Search result: ${searchText} `} />
            <div >
                {searchPostsList.map((el: IPost) => (
                    <SearchPost post={el} key={el.id} {...el} />
                ))}
                <Pagination postsPerPage={take} totalPostsCount={totalSearchPostsCount} />
            </div>

        </section>
    )
}