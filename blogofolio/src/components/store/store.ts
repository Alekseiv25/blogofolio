import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { popupReducer } from './popUpReducer'


export const rootReducer = combineReducers({
	popup: popupReducer
})



export const store = configureStore({
    reducer: rootReducer
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch