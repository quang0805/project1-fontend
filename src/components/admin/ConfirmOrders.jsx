import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";

export default function ConfirmOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await axios.get("http://localhost:8080/orders");
            setOrders(response.data);
        };
        fetchOrders();
    }, []);

    const handleConfirm = async (orderId) => {
        try {
            await axios.post(`http://localhost:8080/order/confirm?orderId=${orderId}`);
            alert("Order confirmed!");
            setOrders((prev) => prev.filter((order) => order.id !== orderId));
        } catch (error) {
            console.error(error);
            alert("Failed to confirm order.");
        }
    };

    return (
        <Box p={3}>
            <h2>Xác Nhận Order</h2>
            {orders.map((order) => (
                <Box key={order.id} mb={2} p={2} border="1px solid #ccc" borderRadius="8px">
                    <Typography>Số bàn: {order.tableId}</Typography>
                    <Typography>Tổng tiền: {order.totalAmount} VND</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleConfirm(order.id)}
                    >
                        Xác Nhận
                    </Button>
                </Box>
            ))}
        </Box>
    );
}
