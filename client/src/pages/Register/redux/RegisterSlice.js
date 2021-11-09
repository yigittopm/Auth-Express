import { createSlice } from "@reduxjs/toolkit"

import axios from "axios"

export const RegisterSlice = createSlice({
    name:"RegisterSlice",
    initialState: {
        name: "",
        email:"",
        password:"",
        statusCode:null,
    },
    reducers: {
        createUser: (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password
            }
        },
        createSuccess: (state, action) => {
            return {
                ...state,
                statusCode: action.payload
            }
        },
        createFail: (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                statusCode: action.payload
            }
        }
    }
})

export const { createUser, createSuccess, createFail } = RegisterSlice.actions

export const register = (data) => {
    return async dispatch => {
        dispatch(createUser(data))
        try {
            await axios.post("http://localhost:5000/api/auth/register", data)
                .then((response) => {
                    if(response !== null) {
                        dispatch(createSuccess(response.status))
                    }
                })
                .catch((err) => {
                    dispatch(createFail(err))
                })

        }catch(err) {
            console.log(err)
        }
    }
}