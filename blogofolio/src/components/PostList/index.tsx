import PostlistView from "./PostListView";

const PostList = (props: any) => {
    const {
        mainPost,
        bottomPost,
        asidePost
    } = props

    return (
        <PostlistView
            mainPost={mainPost}
            bottomPost={bottomPost}
            asidePost={asidePost} />
    )
}


export default PostList