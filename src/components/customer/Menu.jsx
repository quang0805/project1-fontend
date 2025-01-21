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



    // const foods = [{
    //     name: 'Bánh mì',
    //     description: 'Đến từ Việt Nam',
    //     isAvailable: true,
    //     category: 'FOOD',
    //     price: 10000,
    //     image: 'https://cdn.pixabay.com/photo/2020/10/20/18/02/bread-5671124_1280.jpg'
    // },
    // {
    //     name: 'Mì Ý',
    //     description: 'Đến từ Ý',
    //     isAvailable: false,
    //     category: 'FOOD',
    //     price: 10000,
    //     image: 'https://media.istockphoto.com/id/1975701807/vi/anh/m%C3%AC-%E1%BB%91ng-bucatini-v%E1%BB%9Bi-s%E1%BB%91t-c%C3%A0-chua-v%C3%A0-l%C3%A1-h%C3%BAng-qu%E1%BA%BF.jpg?s=2048x2048&w=is&k=20&c=NV4qimt6UEBjbao2AhYyx-ahJtLwzkm6_6tp7XimgWc='
    // },
    // {
    //     name: 'Mì Ý',
    //     description: 'Đến từ Ý',
    //     isAvailable: true,
    //     category: 'FOOD',
    //     price: 10000,
    //     image: 'https://media.istockphoto.com/id/1975701807/vi/anh/m%C3%AC-%E1%BB%91ng-bucatini-v%E1%BB%9Bi-s%E1%BB%91t-c%C3%A0-chua-v%C3%A0-l%C3%A1-h%C3%BAng-qu%E1%BA%BF.jpg?s=2048x2048&w=is&k=20&c=NV4qimt6UEBjbao2AhYyx-ahJtLwzkm6_6tp7XimgWc='
    // },
    // {
    //     name: 'Mì Ý',
    //     description: 'Đến từ Ý',
    //     isAvailable: true,
    //     category: 'FOOD',
    //     price: 10000,
    //     image: 'https://media.istockphoto.com/id/1975701807/vi/anh/m%C3%AC-%E1%BB%91ng-bucatini-v%E1%BB%9Bi-s%E1%BB%91t-c%C3%A0-chua-v%C3%A0-l%C3%A1-h%C3%BAng-qu%E1%BA%BF.jpg?s=2048x2048&w=is&k=20&c=NV4qimt6UEBjbao2AhYyx-ahJtLwzkm6_6tp7XimgWc='
    // },
    // {
    //     name: 'Mì Ý',
    //     description: 'Đến từ Ý',
    //     isAvailable: true,
    //     category: 'FOOD',
    //     price: 10000,
    //     image: 'https://media.istockphoto.com/id/1975701807/vi/anh/m%C3%AC-%E1%BB%91ng-bucatini-v%E1%BB%9Bi-s%E1%BB%91t-c%C3%A0-chua-v%C3%A0-l%C3%A1-h%C3%BAng-qu%E1%BA%BF.jpg?s=2048x2048&w=is&k=20&c=NV4qimt6UEBjbao2AhYyx-ahJtLwzkm6_6tp7XimgWc='
    // }
    // ]

    return (
        <>
            <div className="flex">
                <div className="max-w-[1170px] flex flex-col">
                    <h1 className="text-2xl text-gray font-bold p-4">Menu - Bàn {tableId}</h1>
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
