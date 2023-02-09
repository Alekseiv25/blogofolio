import { combineReducers } from "redux";
import burgerMenuReducer from "./reducers/burgerMenuReducer";
import popupReducer from "./reducers/popUpReducer";
import postListReducer from "./reducers/postListReducer/postListReducer";
import searchToggleReducer from "./reducers/searchToggleReducer";
import themeReduser from "./reducers/themeReducer";


export const rootReducer = combineReducers({
    popup: popupReducer,
    theme: themeReduser,
    burger: burgerMenuReducer,
    search: searchToggleReducer,
    postList: postListReducer
})