import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setCurrentUser: (state, action) => {
            state = action.payload

            // !!!! bad practice !!!!
            // Only work in JS, not Typescript
            return state
        },
        resetCurrentUser: (state, action) => {
            state = null

            // !!!! bad practice !!!!
            // Only work in JS, not Typescript
            return state
        }
    }
})

export const { setCurrentUser, resetCurrentUser } = UserSlice.actions