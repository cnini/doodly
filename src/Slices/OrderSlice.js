const { createSlice } = require("@reduxjs/toolkit");

export const orderSlice = createSlice({
    name: "order",
    initialState: [],
    reducers: {
        storeOrder: (state, action) => {
            state.push(action.payload)
        },
    }
})

export const { storeOrder } = orderSlice.actions