import { Navigation } from "../../components/Navigaton"
import { Tabs } from "../../components/Tabs"
import { Pagination } from "../../components/Pagination"
import PostList from "../../components/PostList"

export const Main = () => {


    return (
        <section>
            <Navigation text="Blog" backToHome="" />
            <Tabs />
            <PostList />
            <Pagination />
        </section>
    )
}
