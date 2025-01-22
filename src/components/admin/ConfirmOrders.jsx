import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../admin/Navbar';
import OrderCard from "./Order/OrderCard";

export default function ConfirmOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const fetchOrders = async () => {
                const response = await axios.get('http://localhost:8080/orders');
                setOrders(response.data);
                console.log(response.data);
            }
            fetchOrders();
        }, 1000);
    }, [])

    const updateOrderStatus = async (orderId, orderStatus) => {
        try {
            await axios.patch(`http://localhost:8080/order/change-status`, { orderId: orderId, orderStatus: orderStatus });
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order.id === orderId ? { ...order, status: orderStatus } : order
                )
            );
        } catch (error) {
            console.log('Error when updating order status: ', error)
        }
    }

    return (
        <div className="flex">
            <Navbar />
            <div className="flex flex-wrap">
                {
                    orders ?
                        orders.map(order => (
                            (order.orderStatus != 'COMPLETED') ?
                                <OrderCard
                                    key={order.id}
                                    order={order}
                                    onUpdateStatus={updateOrderStatus}
                                /> : null
                        )) : null
                }
            </div>
        </div>
    );
}
