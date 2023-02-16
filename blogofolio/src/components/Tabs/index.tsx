import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTotalPostsCountAction, loadTotalPostsCountAsyncAction } from "../../store/reducers/postListReducer/postListAction";
import { AppState } from "../../store/store";
import { Tab } from "./Tab/Tab"
import styles from './Tabs.module.scss'


const totalFavoritesPostsCountSelector = (state: AppState) =>
    state.register.favoritesPosts.length;

const currentPageSelector = (state: AppState) =>
    state.pagination.currentPage;

const tabsSelector = (state: AppState) => state.tabs.tabs;
const activeTabSelector = (state: AppState) => state.tabs.activeTab;

export const Tabs = (props: { activeTab1: string }) => {
    const { activeTab1 } = props;
    const dispatch = useDispatch()

    const totalFavoritesPostsCount = useSelector(
        totalFavoritesPostsCountSelector
    );

    const currentPage = useSelector(currentPageSelector);
    const tabs = useSelector(tabsSelector);
    const activeTab = useSelector(activeTabSelector);
    useEffect(() => {
        switch (activeTab) {
            case "All":
                dispatch(loadTotalPostsCountAsyncAction());
                console.log("render");

                break;
            case "My favorites":
                dispatch(loadTotalPostsCountAction(totalFavoritesPostsCount));
                break;
            default:
                break;
        }
    }, [dispatch, currentPage, activeTab1, totalFavoritesPostsCount, activeTab]);






    return (<div className={styles.tabs}>
        <div className={styles.tabs}>
            {tabs.map((tab) => (
                <Tab key={tab.id} name={tab.name} activeTab={activeTab}></Tab>
            ))}
        </div>
    </div>)
}