import { useSelector } from 'react-redux'
import styles from './PagesNav.module.scss'
import { useEffect, useMemo, useState } from 'react';
import { AppState } from '../../store/store';

interface Props {
    totalPosts: any
    postsPerPage: number
    setCurrentPage: any
}

const activeTabSelector = (state: AppState) => state.tabs.activeTab;
export const Pagination = (props: Props) => {
    let activeTab = useSelector(activeTabSelector);
    const { totalPosts, postsPerPage, setCurrentPage } = props
    const theme = useSelector((state: any) => state.theme)
    let pages: number[] = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }
    const [currentButton, setCurrentButton]: any = useState(1)

    const [arrOfCurrButton, setArrofCurrButtons] = useState([])

    useEffect(() => {
        let tempNumberOfPages: any = [...arrOfCurrButton]

        let dotsInitial = '...'
        let dotsLeft = '... '
        let dotsRight = ' ...'

        if (pages.length < 6) {
            tempNumberOfPages = pages
        }

        if (currentButton >= 1 && currentButton <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pages.length]
        }
        else if (currentButton === 4) {
            const sliced = pages.slice(0, 5)
            tempNumberOfPages = [...sliced, dotsInitial, pages.length]
        }

        else if (currentButton > 4 && currentButton < pages.length - 2) {
            const sliced1 = pages.slice(currentButton - 2, currentButton)
            const sliced2 = pages.slice(currentButton, currentButton + 1)
            tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, pages.length])
        }
        else if (currentButton > pages.length - 3) {
            const sliced3 = pages.slice(pages.length - 4)
            tempNumberOfPages = ([1, dotsLeft, ...sliced3])
        }

        else if (currentButton === dotsInitial) {
            setCurrentButton(arrOfCurrButton[arrOfCurrButton.length - 3] + 1)
        }

        else if (currentButton === dotsRight) {
            setCurrentButton(arrOfCurrButton[3] + 2)
        }

        else if (currentButton === dotsLeft) {
            setCurrentButton(arrOfCurrButton[3] - 2)
        }

        setArrofCurrButtons(tempNumberOfPages)
        setCurrentPage(currentButton)
    }, [currentButton])

    //arrOfCurrButton, pages, setCurrentPage зависимости

    return (
        <div className={activeTab === 'My favorites' ? `${styles.fav}` : `${styles.PagesNavContainer}`}>
            <div className={styles.PrevPage}>
                <svg width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.70945 0.292384C7.89945 0.492383 7.99945 0.742383 7.99945 1.00238C7.99945 1.26238 7.89945 1.51238 7.70945 1.71238L3.40945 6.00238L16.9995 6.00238C17.5495 6.00238 17.9995 6.45238 17.9995 7.00238C17.9995 7.55238 17.5495 8.00238 16.9995 8.00238L3.40945 8.00238L7.70945 12.2924C8.09945 12.6824 8.09945 13.3224 7.70945 13.7124C7.31945 14.1024 6.67945 14.1024 6.28945 13.7124L0.289453 7.71238C0.199453 7.62238 0.129453 7.51238 0.0794534 7.39238C0.0594534 7.34238 0.0394534 7.30238 0.0394534 7.25238C-0.0105466 7.09238 -0.0105466 6.91238 0.0394534 6.75238C0.0394534 6.70238 0.0594534 6.66238 0.0794534 6.61238C0.129453 6.49238 0.199453 6.38238 0.289453 6.29238L6.28945 0.292383C6.67945 -0.0976169 7.31945 -0.0976168 7.70945 0.292384Z"
                        fill="#8D8E97"
                    />
                </svg>
                <button onClick={() => setCurrentButton((prev: number) => prev === 1 ? prev : prev - 1)} disabled={currentButton === 1 ? true : false}>Prev</button>
            </div>
            <div className={styles.PagesNumber}>

                {arrOfCurrButton.map((item: number, index: number) => {
                    return (
                        <button
                            className={
                                currentButton === item ? `${styles.button} ${styles.active}` : `${styles.button}`
                            }
                            style={theme}
                            onClick={() => setCurrentButton(item)}
                            key={index}>
                            {item}
                        </button>)
                })}

            </div>
            <div className={styles.NextPage}>
                <button onClick={() => setCurrentButton((prev: number) => prev === pages.length ? prev : prev + 1)} disabled={currentButton === pages.length ? true : false}>Next</button>
                <svg width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.70945 0.292384C7.89945 0.492383 7.99945 0.742383 7.99945 1.00238C7.99945 1.26238 7.89945 1.51238 7.70945 1.71238L3.40945 6.00238L16.9995 6.00238C17.5495 6.00238 17.9995 6.45238 17.9995 7.00238C17.9995 7.55238 17.5495 8.00238 16.9995 8.00238L3.40945 8.00238L7.70945 12.2924C8.09945 12.6824 8.09945 13.3224 7.70945 13.7124C7.31945 14.1024 6.67945 14.1024 6.28945 13.7124L0.289453 7.71238C0.199453 7.62238 0.129453 7.51238 0.0794534 7.39238C0.0594534 7.34238 0.0394534 7.30238 0.0394534 7.25238C-0.0105466 7.09238 -0.0105466 6.91238 0.0394534 6.75238C0.0394534 6.70238 0.0594534 6.66238 0.0794534 6.61238C0.129453 6.49238 0.199453 6.38238 0.289453 6.29238L6.28945 0.292383C6.67945 -0.0976169 7.31945 -0.0976168 7.70945 0.292384Z"
                        fill="#8D8E97"
                    />
                </svg>
            </div>
        </div>
    )
}


// {/* <svg width="12"
//                     height="2" viewBox="0 0 12 2"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <path d="M2.57142 2H0.5V0H2.57142V2Z" fill={`${theme.color === '#313037' ? "#313037" : "#DADADA"}`} />
//                     <path d="M7.10713 2H5.03571V0H7.10713V2Z" fill={`${theme.color === '#313037' ? "#313037" : "#DADADA"}`} />
//                     <path d="M11.5 2H9.42858V0H11.5V2Z" fill={`${theme.color === '#313037' ? "#313037" : "#DADADA"}`} />
//                 </svg> */}
// {/* <a style={theme} href='#!'>{number4}</a> */ }



// useEffect(() => {
//     dispatch(loadTotalPostsCountAsyncAction());
// }, [dispatch, currentPage]);

// let pages: number[] = [];

// const totalPages = Math.ceil(totalPostsCount / postsPerPage);

// const loadCurrentPage = (page: number) => {
//     dispatch(setCurrentPageAction(page));
// };

// const loadPreviousPage = (page: number) => {
//     dispatch(setPreviouslyPage(page));
// };

// const loadNextPage = (page: number) => {
//     dispatch(setNextPage(page));
// };

// for (let i = 0; i <= totalPages; i++) {
//     pages.push(i);
// }
