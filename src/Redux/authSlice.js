const { createSlice } = require("@reduxjs/toolkit");

export const authSlice = createSlice({
    name: "auth",
    initialState: [
        { email: "admin@doodly.fr", password: "@dmin" }
    ],
    reducers: {
        registry: (state, action) => {
            state.push(action.payload)
        },
    }
})