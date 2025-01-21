import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { clearOrder, setOrderId } from '../../redux/features/orderSlice';
import { Button, Card } from '@mui/material';
import { FolderSpecial } from '@mui/icons-material';


const OrderPage = ({ tableId, customerId }) => {
    const { orderItems } = useSelector(state => state.order);
    const dispatch = useDispatch();
    const [totalMoney, setTotalMoney] = useState(0);

    useEffect(() => {
        const newTotalMoney = orderItems.reduce((total, item) => {
            return total + (item.quantity * item.menuItem.price);
        }, 0);
        setTotalMoney(newTotalMoney);
    }, [orderItems]);



    const handleSubmitOrder = async () => {
        try {
            // Tạo Order
            const orderResponse = await axios.post('http://localhost:8080/order', {
                tableId,
                customerId,
            });
            const orderId = orderResponse.data.id;
            dispatch(setOrderId(orderId));

            // Tạo OrderItems
            const orderItemPromises = orderItems.map(item =>
                axios.post('http://localhost:8080/order-item', {
                    orderId,
                    menuItemId: item.menuItem.id,
                    quantity: item.quantity,
                    specialInstruction: 'hello!'
                })
            );

            await Promise.all(orderItemPromises);
            await axios.post(`http://localhost:8080/order/${orderId}/update-total`);
            alert('Order submitted sucessfully!');
            dispatch(clearOrder());
        } catch (error) {
            console.error('Error submitting order: ', error);
            alert('Failed to submit order.');
        }
    };


    return (
        <div className='flex flex-col fixed top-0 right-0'>
            <div
                className=' flex flex-col justify-between h-full w-[350px] bg-slate-300 p-5'
            >
                <ul>
                    {orderItems.map(item => {
                        const totalPriceItem = item.quantity * item.menuItem.price;
                        return (
                            <li key={item.menuItem.id}>
                                {item.menuItem.name} - {item.quantity} - {totalPriceItem}
                            </li>
                        );
                    })}
                </ul>
                <h4>Tổng tiền: {totalMoney}</h4>
            </div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmitOrder}
                className=''
            >
                Order Now
            </Button>
        </div>
    )
}

export default OrderPage
