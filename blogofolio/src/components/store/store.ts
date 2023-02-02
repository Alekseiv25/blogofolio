import { combineReducers, configureStore } from '@reduxjs/toolkit'
import burgerMenuReducer from './burgerMenuReducer'
import popupReducer from './popUpReducer'
import searchToggleReducer from './searchToggleReducer'
import themeReduser from './themeReducer'


export const rootReducer = combineReducers({
    popup: popupReducer,
    theme: themeReduser,
    burger: burgerMenuReducer,
    search: searchToggleReducer
})


export const store = configureStore({
    reducer: rootReducer
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch