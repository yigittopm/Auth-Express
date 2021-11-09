import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const ProfileSlice = createSlice({
    name:"profileSlice",
    initialState: {
        user:null
    },
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        }
    }
})

export const { setUser } = ProfileSlice.actions

export const login = () => {}