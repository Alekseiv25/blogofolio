export const TOGGLE_SEARCH = 'TOGGLE_SEARCH'


interface ISearchState {
    isOpen: boolean
}

interface ISearchAction {
    type: string
}

const defaultValue: ISearchState = {
    isOpen: false
}

const burgerMenuReducer = (state: ISearchState = defaultValue, action: ISearchAction): ISearchState => {
    switch (action.type) {
        case TOGGLE_SEARCH:
            return {
                isOpen: !state.isOpen
            }
        default:
            return state
    }
}


export default burgerMenuReducer