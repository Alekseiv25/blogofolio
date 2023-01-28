import { useContext, useEffect, useState } from "react"
import { GetSearchPosts, IPost } from "../../Services/PostService"
import { SearchPost } from "../../SearchPost"
import styles from './Search.module.scss'
import { ThemeContext } from "../../Layout"



export const Search = () => {
    const { themeColor } = useContext(ThemeContext)
    const [asidePost, setAsidePost] = useState<IPost[]>([])
    useEffect(() => {
        GetSearchPosts(1).then(post => { setAsidePost(post) })
    }, [])
    return (

        <section>
            <input className={`${styles.input} ${themeColor === 'dark' ? `${styles.dark}` : ''}`} type='text' value={'Search result: 1'} />
            <div >
                {asidePost.map((el) => (
                    <SearchPost key={el.id} {...el} />
                ))}
            </div>

        </section>
    )
}