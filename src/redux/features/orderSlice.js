import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: [],
    orderId: null,
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem(state, action) {
            const { menuItem, quantity } = action.payload;
            const existingItem = state.orderItems.find(item => item.menuItem.id === menuItem.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.orderItems.push({ menuItem, quantity });
            }
        },
        removeItem(state, action) {
            state.orderItems = state.orderItems.filter(item => item.menuItem.id !== action.payload.id);
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const item = state.orderItems.find(item => item.menuItem.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        setOrderId(state, action) {
            state.orderId = action.payload;
        },
        clearOrder(state) {
            state.orderItems = [];
            state.orderId = null
        }

    }
})

export const { addItem, removeItem, updateQuantity, setOrderId, clearOrder } = orderSlice.actions
export default orderSlice.reducer