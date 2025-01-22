import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TableCard = ({ tableNumber, status, onClick }) => {
    return (
        <Card
            className="shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={onClick}
            sx={{
                width: 200,
                backgroundColor: status === 'Occupied' ? '#FFEBEE' : '#E8F5E9',
                borderRadius: '10px',
                cursor: 'pointer'
            }}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                    className="text-center !font-bold text-black"
                >
                    Table {tableNumber}
                </Typography>
                <Typography
                    variant="body2"
                    className={`text-center ${status === 'Occupied' ? 'text-red-500' : 'text-green-500'
                        }`}
                >
                    {status}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default TableCard;
