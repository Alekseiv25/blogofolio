import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import PostListView from "./PostListView";

const favoritesPostsSelector = (state: AppState) => state.favoriteList.favoritesPosts;

const MyFavoritesList = () => {

    const posts = useSelector(favoritesPostsSelector);
    const favoritesPosts = posts
    return (<>
        <PostListView bottomPost={favoritesPosts} mainPost={[]} asidePost={[]} />
    </>)
}
export default MyFavoritesList