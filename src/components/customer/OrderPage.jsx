import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { clearOrder, setOrderId } from '../../redux/features/orderSlice';
import { Button } from '@mui/material';
import { useState } from 'react';

const OrderPage = ({ tableId, customerId }) => {
    const { orderItems } = useSelector(state => state.order);
    const { loading, setLoading } = useState(false);
    const dispatch = useDispatch();

    const handleSubmitOrder = async () => {
        try {
            setLoading(true);
            // Tạo Order
            const orderResponse = await axios.post('http://localhost:8080/order', {
                tableId,
                customerId,
            });
            const { id: orderId } = orderResponse.data;
            dispatch(setOrderId(orderId));

            // Tạo OrderItems
            const orderItemPromises = orderItems.map(item =>
                axios.post('http://localhost:8080/order-item', {
                    orderId,
                    menuItem: item.menuItem,
                    quantity: item.quantity,
                })
            );
            await Promise.all(orderItemPromises);
            setLoading(false);

            alert('Order submitted sucessfully!');
            dispatch(clearOrder());
        } catch (error) {
            console.error('Error submitting order: ', error);
            alert('Failed to submit order.');
        }
    };


    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmitOrder}
                className="!fixed top-6 right-10"

            >
                {
                    loading ? 'Loading ...' : 'Gửi đơn hàng'
                }

            </Button>
        </div>
    )
}

export default OrderPage
