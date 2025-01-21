import React, { useState } from "react";
import { Card, CardContent, CardActions, Typography, Button, Chip, CardMedia } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/features/orderSlice";
const FoodCard = ({ id, name, description, price, category, isAvailable, image }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const handleOrderNow = () => {
        const menuItem = { id, name, description, price, category, isAvailable, image };
        dispatch(addItem({ menuItem, quantity })); // => orderItem
        alert(`Added ${quantity} x ${name} to order!`);
        setQuantity(1);
    }

    return (
        <Card
            className="shadow-lg"
            sx={{
                maxWidth: 345,
                borderRadius: 2,
                border: 1,
                borderColor: "grey.300",
            }}
        >
            {/* Card Content */}
            <CardContent>
                {/* Tên món ăn */}
                <Typography variant="h6" component="div" className="!font-bold text-black">
                    {name}
                </Typography>

                {/* Ảnh món ăn */}
                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    sx={{
                        objectFit: "cover",
                        height: "160px",
                        width: 250
                    }}
                />

                {/* Category */}
                <div className="flex justify-between">
                    <Chip
                        label={category}
                        color="primary"
                        size="small"
                        sx={{ mt: 1, mb: 2 }}
                        className="capitalize"
                    />
                    <div className="pt-2 flex space-x-2">
                        <RemoveCircleIcon
                            onClick={handleDecrement}
                            className="cursor-pointer"
                        />
                        <p>{quantity}</p>
                        <AddCircleIcon
                            className="cursor-pointer"
                            onClick={handleIncrement}

                        />

                    </div>
                </div>


                {/* Mô tả món ăn */}
                <Typography variant="body2" color="text.secondary" className="mb-3">
                    {description}
                </Typography>

                {/* Giá và trạng thái */}
                <div className="flex justify-between items-center">
                    <Typography variant="h6" color="green">
                        {price.toLocaleString()} VND
                    </Typography>
                    <Chip
                        label={isAvailable ? "Available" : "Out of Stock"}
                        color={isAvailable ? "success" : "error"}
                        size="small"
                    />
                </div>
            </CardContent>

            {/* Card Actions */}
            <CardActions className="flex justify-center">
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!isAvailable}
                    fullWidth
                    onClick={handleOrderNow}
                >
                    {isAvailable ? "Chọn món" : "Unavailable"}
                </Button>
            </CardActions>
        </Card>
    );
};

export default FoodCard;
