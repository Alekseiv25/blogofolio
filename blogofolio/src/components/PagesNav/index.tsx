import { useContext } from 'react'
import { ThemeContext } from '../Layout'
import styles from './PagesNav.module.scss'

interface Props {
    number: number
    number2: number
    number3: number
    number4: number
}

export const PagesNav = (props: Props) => {
    const { number, number2, number3, number4 } = props
    const { themeColor } = useContext(ThemeContext)
    return (
        <div className={styles.PagesNavContainer}>
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
                <button>Prev</button>
            </div>
            <div className={`${styles.PagesNumber} ${themeColor === 'dark' ? `${styles.dark}` : '' }`}>
                <a href='#!'>{number}</a>
                <a href='#!'>{number2}</a>
                <a href='#!'>{number3}</a>
                <svg width="12"
                    height="2" viewBox="0 0 12 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.57142 2H0.5V0H2.57142V2Z" fill={themeColor === 'dark' ? `#FFFFFF` : '#313037' } />
                    <path d="M7.10713 2H5.03571V0H7.10713V2Z" fill={themeColor === 'dark' ? `#FFFFFF` : '#313037' } />
                    <path d="M11.5 2H9.42858V0H11.5V2Z" fill={themeColor === 'dark' ? `#FFFFFF` : '#313037' } />
                </svg>
                <a href='#!'>{number4}</a>
            </div>
            <div className={styles.NextPage}>
                <button>Next</button>
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