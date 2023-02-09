import { IPost } from "../../services/PostService";
import { AsidePostItem } from "../PostItems/AsidePostItem";
import { BottomPostItem } from "../PostItems/BottomPostItem";
import { MainPostItem } from "../PostItems/MainPostItem";
import styles from './styles.module.scss'

const PostList = (props: any) => {
    const { mainPost, bottomPost, asidePost, } = props;
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