import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { act } from "react";
const initialState = {
    items: [],
    loading: false,
    error: null,
}

export const fetchMenuItems = createAsyncThunk('menu/fetchMenuItems', async () => {
    const response = await axios.get('http://localhost:8080/menu');
    return response.data;
})

export const createMenuItem = createAsyncThunk('menu/createMenuItem', async (menuItem) => {
    const response = await axios.post('http://localhost:8080/menu/create', menuItem);
    return response.data;
})


// export const changeStatusMenuItem = createAsyncThunk('menu/changeStatusMenuItem', async (id) => {
//     const response = await axios.post(`http://localhost:8080/menu/${id}`)
//     return response.data;
// })


const menuItemSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenuItems.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMenuItems.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchMenuItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createMenuItem.fulfilled, (state, action) => {
                state.items.push(action.payload); // Cập nhật state ngay khi thêm món ăn
            })
            // .addCase(changeStatusMenuItem.fulfilled, (state, action) => {
            //     const index = state.items.findIndex(item => item.id === action.payload.id);
            //     if (index !== -1) {
            //         state.items[index].available = action.payload.available;
            //     }
            // })
            ;
    }

})

export default menuItemSlice.reducer;
