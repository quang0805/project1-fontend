import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import FoodCard from "./FoodCard";
import axios from "axios";
import OrderPage from "./OrderPage";


const Menu = () => {
    const { tableId } = useParams();
    const [foods, setFoods] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMenuItem = async () => {
            try {
                const response = await axios.get('http://localhost:8080/menu');
                const menuItems = response.data;
                setFoods(menuItems);
                console.log(menuItems);
            } catch (error) {
                alert('Error when request to server!');
            }
        }
        fetchMenuItem();

    }, []);
    return (
        <>
            <div className="flex relative bg-menu-background bg-no-repeat bg-cover min-h-screen">
                {/* <div className="absolute inset-0 bg-black bg-opacity-5 bg-cover "></div> */}
                <div className="max-w-[1170px] flex flex-col ">
                    <h1 className="text-2xl text-white font-bold p-4">Menu - Bàn {tableId}</h1>
                    <div className="flex flex-wrap justify-evenly gap-8">
                        {foods.map((food, index) => (
                            <FoodCard
                                key={index}
                                id={food.id}
                                name={food.name}
                                description={food.description}
                                price={food.price}
                                category={food.category}
                                isAvailable={food.available}
                                image={food.urlImage}
                            />
                        ))}
                    </div >
                </div>
                <OrderPage
                    tableId={tableId}
                    customerId={1}
                />
            </div>
        </>
    );
};

export default Menu;
