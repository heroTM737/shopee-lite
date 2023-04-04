import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/store/cart.slice.js";

const logger = store => next => action => {
    console.log(action)
    next(action)
}

const store = configureStore({
    reducer: {
        cart: cartSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
