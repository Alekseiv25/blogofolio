import { useContext, useEffect, useState } from "react"
import { GetSearchPosts, IPost } from "../../Services/PostService"
import { SearchPost } from "../../SearchPost"
import styles from './Search.module.scss'
import { ThemeContext } from "../../Layout"
import { useLocation } from "react-router-dom"



export const Search = () => {
    const { themeColor } = useContext(ThemeContext)
    const [searchPost, setSearchPost] = useState<IPost[]>([])
    const location = useLocation();
    const searchText = location.state || "nothing";
    useEffect(() => {
        GetSearchPosts(searchText).then(post => { setSearchPost(post) })
    }, [searchText])
    return (

        <section>
            <input className={`${styles.input} ${themeColor === 'dark' ? `${styles.dark}` : ''}`} type='text' value={`Search result: ${searchText} `} />
            <div >
                {searchPost.map((el) => (
                    <SearchPost key={el.id} {...el} />
                ))}
            </div>

        </section>
    )
}