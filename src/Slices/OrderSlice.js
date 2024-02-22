const { createSlice } = require("@reduxjs/toolkit");

export const orderSlice = createSlice({
    name: "order",
    initialState: [],
    reducers: {
        storeOrder: (state, action) => {
            state.push(action.payload)
        },
        resetOrders: (state, action) => {
            return []
        },
        updateStoredOrder: (state, action) => {
            state.forEach(
                el => {
                    if (el.number === action.payload.number) {
                        return { ...el, status: action.payload.status }
                    }

                    return el
                }
            )
        }
    }
})

export const { storeOrder, resetOrders, updateStoredOrder } = orderSlice.actions