import { useSelector } from "react-redux";
import { IPost } from "../../services/PostService";
import { AppState } from "../../store/store";
import { AsidePostItem } from "../PostItems/AsidePostItem";
import { BottomPostItem } from "../PostItems/BottomPostItem";
import { MainPostItem } from "../PostItems/MainPostItem";
import styles from './styles.module.scss'
interface IProps {
    mainPost: IPost[];
    bottomPost: IPost[];
    asidePost: IPost[];
}const favoritesPostsSelector = (state: AppState) => state.favoriteList.favoritesPosts;
const activeTabSelector = (state: AppState) => state.tabs.activeTab;

const PostlistView = (props: IProps) => {
    const { mainPost, bottomPost, asidePost } = props
    let activeTab = useSelector(activeTabSelector);
    const favoritePosts = useSelector(favoritesPostsSelector);

    if (!favoritePosts.length && activeTab === 'My Favorites') {
        return (<div className={styles.noposts}><p>No favorites Posts </p></div>)
    } else {

        return (
            <div className={activeTab === 'All' ? `${styles.posts}` : `${styles.myfavposts1}`}>
                <div className={activeTab === 'All' ? `${styles.leftPosts}` : `${styles.myfavposts2}`}>
                    <div className={styles.mainPost}>
                        {mainPost.map((post: IPost) => (
                            <MainPostItem post={post} key={post.id} {...post} />
                        ))
                        }
                    </div>
                    <div className={activeTab === 'All' ? `${styles.bottomPosts}` : `${styles.myfavposts}`}>
                        {bottomPost.map((post: IPost) => (
                            <BottomPostItem post={post} key={post.id} {...post} />
                        ))}
                    </div></div>
                <aside className={styles.asidePosts}>
                    {asidePost.map((post: IPost) => (
                        <AsidePostItem post={post} key={post.id} {...post} />
                    ))}
                </aside>
            </div>
        )
    }
}

export default PostlistView