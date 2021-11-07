import {combineReducers} from "redux"

import { RegisterSlice } from "../pages/Register/redux/RegisterSlice"
import { LoginSlice } from "../pages/Login/redux/LoginSlice"

export const rootReducer = combineReducers({
    register: RegisterSlice.reducer,
    login: LoginSlice.reducer
})