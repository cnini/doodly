import { currentUserSlice } from "./src/Slices/CurrentUserSlice";
import { orderSlice } from "./src/Slices/OrderSlice";
import { productSlice } from "./src/Slices/ProductSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        currentUser: currentUserSlice.reducer,
        order: orderSlice.reducer
    }
})