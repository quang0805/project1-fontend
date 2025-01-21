import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addOrder } from "../../redux/features/orderSlice";
import axios from "axios";

const Menu = () => {
    const { tableId } = useParams();
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await axios.get("http://localhost:8080/menu");
            setMenuItems(response.data);
        };
        fetchMenu();
    }, []);



    const handleSelectItem = (item) => {
        setSelectedItems([...selectedItems, item]);
    };

    const handleSubmitOrder = () => {
        dispatch(
            addOrder({
                tableId,
                items: selectedItems,
                status: "Pending",
            })
        );
        alert("Đơn hàng đã được gửi!");
        setSelectedItems([]);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Menu - Bàn {tableId}</h1>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id} className="flex justify-between items-center mb-2">
                        <span>{item.name} - {item.price.toLocaleString()} VND</span>
                        <Button variant="outlined" onClick={() => handleSelectItem(item)}>
                            Chọn
                        </Button>
                    </li>
                ))}
            </ul>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmitOrder}
                className="mt-4"
            >
                Gửi Đơn Hàng
            </Button>
        </div>
    );
};

export default Menu;
