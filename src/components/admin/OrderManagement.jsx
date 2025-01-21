import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { updateOrderStatus } from "../../redux/features/orderSlice";

const OrderManagement = () => {
    const orders = useSelector((state) => state.order.orders);
    const dispatch = useDispatch();

    const handleConfirmOrder = (id) => {
        dispatch(updateOrderStatus({ id, status: "Confirmed" }));
    };

    const handleMarkAsPaid = (id) => {
        dispatch(updateOrderStatus({ id, status: "Paid" }));
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Quản Lý Đơn Hàng</h1>
            <ul>
                {orders.map((order) => (
                    <li key={order.id} className="mb-4">
                        <div>
                            <strong>Bàn {order.tableId}:</strong> {order.items.join(", ")} -{" "}
                            <span>{order.status}</span>
                        </div>
                        <div className="mt-2">
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleConfirmOrder(order.id)}
                            >
                                Xác Nhận
                            </Button>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={() => handleMarkAsPaid(order.id)}
                                className="ml-2"
                                disabled={order.status === "Paid"}
                            >
                                Thanh Toán
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderManagement;
