import { useEffect, useState } from "react"
import { GetSearchPosts, IPost } from "../../Services/PostService"
import { SearchPost } from "../../SearchPost"
import styles from './Search.module.scss'
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"



export const Search = () => {
    const getThemeSelector = (state: any) => state.theme
    const theme = useSelector(getThemeSelector)
    const [searchPost, setSearchPost] = useState<IPost[]>([])
    const location = useLocation();
    const searchText = location.state || "nothing";

    useEffect(() => {
        GetSearchPosts(searchText).then(post => { setSearchPost(post) })
    }, [searchText])

    return (
        <section>
            <input className={styles.input} style={theme} type='text' value={`Search result: ${searchText} `} />
            <div >
                {searchPost.map((el) => (
                    <SearchPost key={el.id} {...el} />
                ))}
            </div>

        </section>
    )
}