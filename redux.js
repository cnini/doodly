import { productSlice } from "./src/Slices/ProductSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        product: productSlice.reducer
    }
})