export const OPEN_POPUP = 'OPEN_POPUP'
export const CLOSE_POPUP = 'CLOSE_POPUP'



interface IPopupState {
    isOpen: boolean
    image?: string
}

interface IPopupAction {
    type: string
    image?: string
}

const defaultValue: IPopupState = {
    isOpen: false
}

export const popupReducer = (state: IPopupState = defaultValue, action: IPopupAction): IPopupState => {
    switch (action.type) {
        case OPEN_POPUP:
            return {
                ...state,
                isOpen: true,
                image: action.image
            }
        case CLOSE_POPUP:
            return {
                ...state,
                isOpen: false
            }
        default:
            return state
    }
}