import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orderSlice";
import menuItemReducer from "./features/menuItemSlice"

export const store = configureStore({
    reducer: {
        order: orderReducer,
        menu: menuItemReducer
    },
});
