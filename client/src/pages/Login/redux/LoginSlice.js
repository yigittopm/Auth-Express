import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const LoginSlice = createSlice({
    name: "LoginSlice",
    initialState: {
        email: "",
        password: "",
        user: "",
        statusCode: null,
        token: null
    },
    reducers: {
        setUser: (state, action) => {
            return {
                ...state
            }
        }
    }
})

export const {setUser} = LoginSlice.actions

export const login = (data) => {
    return async dispatch => {
        dispatch(setUser(data))
        console.log(data)
    }
}