export const DAY = 'DAY'
export const NIGHT = 'NIGHT'

interface ITheme {
    background?: string
    color: string
}

const defaultTheme: ITheme = {
    background: '#F3F3F3',
    color: '#313037',
}

const themeReduser = (state: ITheme = defaultTheme, action: any): ITheme => {
    switch (action.type) {
        case DAY:
            return {
                color: '#313037'
            }
        case NIGHT:
            return {
                background: '#313037',
                color: '#ffffff'
            }

        default:
            return state
    }
}

export default themeReduser