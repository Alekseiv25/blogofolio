import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPageAction } from '../../../store/reducers/paginationReducer/actions'
import { setActiveTabAction } from '../../../store/reducers/tabReducer/actions'
import { ActiveTabType } from '../../../store/reducers/tabReducer/types'
import { AppState } from '../../../store/store'
import styles from './Tab.module.scss'

export const Tab = (props: { name: ActiveTabType; activeTab: ActiveTabType; }) => {
    const { name, activeTab } = props;
    const dispatch = useDispatch();
    const user = useSelector((state: AppState) => state.auth.user)
    const theme = useSelector((state: any) => state.theme)
    const setActiveTab = (tabName: ActiveTabType) => {
        dispatch(setActiveTabAction(tabName));
        dispatch(setCurrentPageAction(1));
    };
    if (!user && name === "My Posts" ) {
        return null
    }
    return (<>
        <button
            onClick={() => setActiveTab(name)}
            className={activeTab === name ? `${styles.tab} ${styles.active}` : `${styles.tab}`}
            style={theme}
        >
            {name}
        </button></>

    )
}