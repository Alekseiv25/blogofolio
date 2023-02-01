import { combineReducers, configureStore } from '@reduxjs/toolkit'
import popupReducer from './popUpReducer'
import themeReduser from './themeReducer'


export const rootReducer = combineReducers({
    popup: popupReducer,
    theme: themeReduser
})


export const store = configureStore({
    reducer: rootReducer
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch