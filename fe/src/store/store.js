import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "@/store/cart.slice.js";

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default store
