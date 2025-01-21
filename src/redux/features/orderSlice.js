import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        updateOrderStatus: (state, action) => {
            const { id, status } = action.payload;
            const order = state.orders.find((order) => order.id === id);
            if (order) {
                order.status = status;
            }
        },
    },
});

export const { addOrder, updateOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;
