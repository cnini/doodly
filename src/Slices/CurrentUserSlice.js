const { createSlice } = require("@reduxjs/toolkit");

export const currentUserSlice = createSlice({
    name: "currentUser",
    initialState: {},
    reducers: {
        setCurrentUser: (state, action) => {
            state.uid = action.payload.uid
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.email = action.payload.email
            state.address = action.payload.address
            state.zipcode = action.payload.zipcode
            state.city = action.payload.city
            state.country = action.payload.country
        },
        resetCurrentUser: (state, action) => {
            // !!!! bad practice !!!!
            // Only work in JS, not Typescript
            return {}
        }
    }
})

export const { setCurrentUser, resetCurrentUser } = currentUserSlice.actions