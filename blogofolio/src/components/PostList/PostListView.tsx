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

    if (!favoritePosts.length && activeTab === 'My favorites') {
        return (<div className={styles.noposts}><p>No favorites Posts </p></div>)
    }
    else {

        return (
            <div className={activeTab === 'My favorites' ? `${styles.myfavposts1}` : `${styles.posts}`}>
                <div className={activeTab === 'My favorites' ? `${styles.myfavposts2}` : `${styles.leftPosts}`}>
                    <div className={styles.mainPost}>
                        {mainPost.map((post: IPost) => (
                            <MainPostItem post={post} key={post.id} {...post} />
                        ))
                        }
                    </div>
                    <div className={activeTab === 'My favorites' ? `${styles.myfavposts}` : `${styles.bottomPosts}`}>
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