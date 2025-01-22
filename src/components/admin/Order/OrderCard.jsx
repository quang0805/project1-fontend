import React from 'react';
import { Card, CardContent, Typography, Button, Divider } from '@mui/material';

const OrderCard = ({ order, onUpdateStatus }) => {
    const { id, orderItems, table, total_amount, orderStatus } = order;

    return (
        <Card
            className={`!shadow-lg !hover:shadow-xl !transition-all !duration-300 !relative `}
            sx={{ maxWidth: 500, margin: 2, maxHeight: 400, minWidth: 270 }
            }
        >
            <CardContent>
                <div className='min-w-64'>
                    <div>
                        <Typography variant="h6" className="!font-bold !mb-2">
                            Order #{id} - Table {table.number}
                        </Typography>
                        <Divider className="mb-4" />
                        <div className="mb-4">
                            {orderItems.map((item) => (
                                <Typography key={item.id} className="text-sm">
                                    {item.menuItem.name} x{item.quantity} - {item.price.toLocaleString()} VND
                                </Typography>
                            ))}
                        </div>
                        <Typography className="!font-bold !text-lg !text-gray-700">
                            Total: {total_amount.toLocaleString()} VND
                        </Typography>
                        <Typography className={`!text-sm !text-white !mb-4 !font-bold
                         ${(orderStatus == 'PENDING') ? '!bg-gray-900' :
                                (orderStatus == 'PREPARING') ? '!bg-blue-600' :
                                    (orderStatus == 'READY') ? '!bg-orange-500' : null} !rounded-xl !w-fit p-1`}>
                            Status: {orderStatus}
                        </Typography>
                    </div>
                    <div className="absolute bottom-3 left-2 flex gap-3">
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => onUpdateStatus(id, 'PREPARING')}
                        >
                            Prepare
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => onUpdateStatus(id, 'READY')}
                            sx={{ backgroundColor: 'orange' }}
                        >
                            Ready
                        </Button>
                        <Button
                            variant="contained"
                            color="success"
                            size="small"
                            onClick={() => onUpdateStatus(id, 'COMPLETED')}
                        >
                            Complete
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card >
    );
};

export default OrderCard;
