import { combineReducers } from "redux";
import {ToggleReducer} from "./ToggleReducer"
import {allProductReducer} from "./AllProduct"
export const rootReducer =combineReducers({
    ToggleReducer,
})