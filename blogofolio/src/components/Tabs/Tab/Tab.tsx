import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPageAction } from '../../../store/reducers/paginationReducer/actions'
import { setActiveTabAction } from '../../../store/reducers/tabReducer/actions'
import { ActiveTabType } from '../../../store/reducers/tabReducer/types'
import styles from './Tab.module.scss'

export const Tab = (props: { name: ActiveTabType; activeTab: ActiveTabType; }) => {
    const { name, activeTab } = props;
    const dispatch = useDispatch();
    const theme = useSelector((state: any) => state.theme)
    const setActiveTab = (tabName: ActiveTabType) => {
        dispatch(setActiveTabAction(tabName));
        dispatch(setCurrentPageAction(1));
    };

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