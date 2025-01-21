import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { clearOrder, setOrderId } from '../../redux/features/orderSlice';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';



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
                className=' flex flex-col justify-between h-full w-[350px] bg-paper-background p-5'
            >
                <ul>
                    {orderItems.map(item => {
                        const totalPriceItem = item.quantity * item.menuItem.price;
                        return (
                            <li key={item.menuItem.id}>
                                {item.menuItem.name} - {item.quantity} - {totalPriceItem.toLocaleString()} VND
                            </li>
                        );
                    })}
                </ul>
                <Divider variant="middle" component="li" />
                <h4 className='pt-4 font-bold'>Tổng tiền: {totalMoney.toLocaleString()} VND</h4>
            </div>
            <div className='flex justify-between'>
                <Button
                    variant="contained"
                    onClick={handleSubmitOrder}
                    sx={{
                        width: 'stretch',
                        backgroundColor: '#232323'
                    }}
                >
                    Order Now
                </Button>
            </div>
        </div>
    )
}

export default OrderPage
