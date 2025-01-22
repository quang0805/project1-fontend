import React, { useState } from "react";
import { Box, TextField, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Navbar from "./Navbar";
import FoodList from "./FoodList";
import { useDispatch, useSelector } from "react-redux";
import { createMenuItem } from "../../redux/features/menuItemSlice";

export default function CreateMenuItem() {
    const dispatch = useDispatch();

    const [menuItem, setMenuItem] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        available: true,
        urlImage: "",
    });

    const handleChange = (e) => {
        setMenuItem({ ...menuItem, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createMenuItem(menuItem));
        alert('Tạo thành công Menu Item');
        setMenuItem({
            name: "",
            description: "",
            price: "",
            category: "",
            available: true,
            urlImage: "",
        })
    };

    return (
        <div className="flex bg-gray-300">
            <Navbar
            />
            <div className="!h-[500px] ">
                <Box p={3}
                    sx={{
                        marginLeft: "20px",
                    }}
                >
                    <h2 className="font-bold">Thêm Đồ Ăn</h2>
                    <TextField
                        label="Tên món ăn"
                        name="name"
                        value={menuItem.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"

                    />
                    <TextField
                        label="Mô tả"
                        name="description"
                        value={menuItem.description}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Giá"
                        name="price"
                        type="number"
                        value={menuItem.price}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Loại</InputLabel>
                        <Select
                            name="category"
                            value={menuItem.category}
                            onChange={handleChange}
                        >
                            <MenuItem value="FOOD">FOOD</MenuItem>
                            <MenuItem value="DRINK">DRINK</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="URL Ảnh"
                        name="urlImage"
                        value={menuItem.urlImage}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Thêm
                    </Button>
                </Box>
                <FoodList />
            </div>
        </div >
    );
}
