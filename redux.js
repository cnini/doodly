import { authSlice } from "./src/Redux/authSlice";
import { cartSlice } from "./src/Redux/cartSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    }
})