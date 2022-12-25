import style from './Tab.module.scss'

type TabType = {
    text: string
}

export const Tab = (props: TabType) => {
    const { text } = props
    return (<button className={style.tab}>{text}</button>)
}