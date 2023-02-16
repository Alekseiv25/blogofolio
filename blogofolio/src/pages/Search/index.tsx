import { useEffect, useState } from "react"
import { GetSearchPosts, IPost } from "../../services/PostService"
import { SearchPost } from "../../components/SearchPost"
import styles from './Search.module.scss'
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"




export const Search = (props: { post: IPost }) => {
    const { post } = props
    const getThemeSelector = (state: any) => state.theme
    const theme = useSelector(getThemeSelector)
    const [searchPost, setSearchPost] = useState<IPost[]>([])
    const location = useLocation();
    const searchText = location.state || "nothing";

    useEffect(() => {
        GetSearchPosts(searchText).then(post => { setSearchPost(post) })
    }, [searchText])


    if (!searchPost.length) {
        return (<div className={styles.container}>
            <p className={styles.notresult}>Not results</p>
        </div>
        )
    }

    return (
        <section>
            <input className={styles.input} style={theme} type='text' value={`Search result: ${searchText} `} />
            <div >
                {searchPost.map((el) => (
                    <SearchPost  key={el.id} {...el} />
                ))}
            </div>

        </section>
    )
}