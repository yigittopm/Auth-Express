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
                ...state,
                token: action.payload
            }
        },
    }
})

export const {setUser} = LoginSlice.actions

export const login = (data) => {
    return async dispatch => {
        dispatch(setUser(data))
        try {
            await axios.post("http://localhost:5000/api/auth/login", data)
                .then((response) => {
                    if(response !== null) {
                        dispatch(setUser(response.data))
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }catch(err) {
            console.log(err)
        }
    }
}