import { createSlice } from "@reduxjs/toolkit"

//import axios from "axios"

export const RegisterSlice = createSlice({
    name:"RegisterSlice",
    initialState: {
        name: "",
        email:"",
        password:""
    },
    reducers: {
        createUser: (state, action) => {
            console.log("Hey")
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password
            }
        }
    }
})

export const { createUser } = RegisterSlice.actions

export const register = (data) => {
    console.log(data)
    return async dispatch => {
        dispatch(createUser(data))
    }
}