export const TOGGLE_BURGER = 'TOGGLE_BURGER'


interface IBurgerState {
    isOpen: boolean
}

interface IBurgerAction {
    type: string
}

const defaultValue: IBurgerState = {
    isOpen: false
}

const burgerMenuReducer = (state: IBurgerState = defaultValue, action: IBurgerAction): IBurgerState => {
    switch (action.type) {
        case TOGGLE_BURGER:
            return {
                isOpen: !state.isOpen
            }
        default:
            return state
    }
}


export default burgerMenuReducer