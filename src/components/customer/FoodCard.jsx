import React from "react";
import { Card, CardContent, CardActions, Typography, Button, Chip, CardMedia } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
const FoodCard = ({ name, description, price, category, isAvailable, image, quantity, addFood, removeFood }) => {



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
                <Typography variant="h5" component="div" className="font-bold text-gray-800 ">
                    {name}
                </Typography>

                {/* Ảnh món ăn */}
                <CardMedia
                    component="img"
                    height="180"
                    image={image}
                    alt={name}
                    sx={{
                        objectFit: "cover",
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
                        <AddCircleIcon
                            className="cursor-pointer"
                            onClick={() => console.log(quantity)}

                        />
                        <p>{quantity}</p>
                        <RemoveCircleIcon
                            className="cursor-pointer"
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
                >
                    {isAvailable ? "Order Now" : "Unavailable"}
                </Button>
            </CardActions>
        </Card>
    );
};

export default FoodCard;
