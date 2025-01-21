import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addOrder } from "../../redux/features/orderSlice";
import FoodCard from "./FoodCard";
import axios from "axios";

const Menu = () => {
    const { tableId } = useParams();
    // const [foods, setFoods] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const fetchMenu = async () => {
    //         const response = await axios.get("http://localhost:8080/menu");
    //         setFoods(response.data);
    //     };
    //     fetchMenu();
    // }, []);

    const foods = [{
        name: 'Bánh mì',
        description: 'Đến từ Việt Nam',
        isAvailable: true,
        category: 'FOOD',
        price: 10000,
        image: 'https://cdn.pixabay.com/photo/2020/10/20/18/02/bread-5671124_1280.jpg'
    },
    {
        name: 'Mì Ý',
        description: 'Đến từ Ý',
        isAvailable: false,
        category: 'FOOD',
        price: 10000,
        image: 'https://media.istockphoto.com/id/1975701807/vi/anh/m%C3%AC-%E1%BB%91ng-bucatini-v%E1%BB%9Bi-s%E1%BB%91t-c%C3%A0-chua-v%C3%A0-l%C3%A1-h%C3%BAng-qu%E1%BA%BF.jpg?s=2048x2048&w=is&k=20&c=NV4qimt6UEBjbao2AhYyx-ahJtLwzkm6_6tp7XimgWc='
    },
    {
        name: 'Mì Ý',
        description: 'Đến từ Ý',
        isAvailable: false,
        category: 'FOOD',
        price: 10000,
        image: 'https://media.istockphoto.com/id/1975701807/vi/anh/m%C3%AC-%E1%BB%91ng-bucatini-v%E1%BB%9Bi-s%E1%BB%91t-c%C3%A0-chua-v%C3%A0-l%C3%A1-h%C3%BAng-qu%E1%BA%BF.jpg?s=2048x2048&w=is&k=20&c=NV4qimt6UEBjbao2AhYyx-ahJtLwzkm6_6tp7XimgWc='
    },
    {
        name: 'Mì Ý',
        description: 'Đến từ Ý',
        isAvailable: false,
        category: 'FOOD',
        price: 10000,
        image: 'https://media.istockphoto.com/id/1975701807/vi/anh/m%C3%AC-%E1%BB%91ng-bucatini-v%E1%BB%9Bi-s%E1%BB%91t-c%C3%A0-chua-v%C3%A0-l%C3%A1-h%C3%BAng-qu%E1%BA%BF.jpg?s=2048x2048&w=is&k=20&c=NV4qimt6UEBjbao2AhYyx-ahJtLwzkm6_6tp7XimgWc='
    },
    {
        name: 'Mì Ý',
        description: 'Đến từ Ý',
        isAvailable: false,
        category: 'FOOD',
        price: 10000,
        image: 'https://media.istockphoto.com/id/1975701807/vi/anh/m%C3%AC-%E1%BB%91ng-bucatini-v%E1%BB%9Bi-s%E1%BB%91t-c%C3%A0-chua-v%C3%A0-l%C3%A1-h%C3%BAng-qu%E1%BA%BF.jpg?s=2048x2048&w=is&k=20&c=NV4qimt6UEBjbao2AhYyx-ahJtLwzkm6_6tp7XimgWc='
    }
    ]



    const handleSelectItem = (item) => {
        setSelectedItems([...selectedItems, item]);
    };

    const handleSubmitOrder = () => {
        dispatch(
            addOrder({
                tableId,
                items: selectedItems,
                status: "Pending",
            })
        );
        alert("Đơn hàng đã được gửi!");
        setSelectedItems([]);
    };
    const addFood = () => {
        setQuantity(quantity + 1);
    }
    const removeFood = () => {
        setQuantity(quantity - 1);
    }

    return (
        <>
            <h1 className="text-2xl text-gray font-bold p-4">Menu - Bàn {tableId}</h1>
            <div className="flex flex-wrap justify-evenly">
                {foods.map((food, index) => (
                    <FoodCard
                        key={index}
                        name={food.name}
                        description={food.description}
                        price={food.price}
                        category={food.category}
                        isAvailable={food.isAvailable}
                        image={food.image}
                        quantity={quantity}
                        addFood={addFood}
                        removeFood={removeFood}
                    />
                ))}
            </div >
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmitOrder}
                className="!absolute top-6 right-10"
            >
                Gửi Đơn Hàng
            </Button>

        </>
    );
};

export default Menu;
