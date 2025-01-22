import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { addMenuItem } from '../../redux/features/menuItemSlice';
import { interactionTargetMap } from 'web-vitals/attribution/onINP.js';

const FoodList = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [change, setChange] = useState(true);

    const changeStatusMenuItem = async (id) => {
        try {
            await axios.put(`http://localhost:8080/menu/${id}`)
            setChange(prev => !prev);
        } catch (error) {
            alert(error);
        }
    }


    const removeMenuItem = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/menu/${id}`);
        } catch (error) {
            alert(error);
        }
    }


    useEffect(() => {
        const fetchFoodList = async () => {
            try {
                const response = await axios.get('http://localhost:8080/menu');
                setMenuItems(response.data);
            } catch (error) {
                alert('Error when connect to server!');
            }
        }
        fetchFoodList();
    }, [change])


    return (
        <div className='flex flex-col space-y-3'>
            {
                menuItems ?
                    menuItems.map((food, index) => (

                        <div
                            className='flex justify-between ml-12 h-8 bg-slate-400 rounded-md pl-2 '
                        >
                            <div className='flex align-middle text-center'>
                                <DeleteIcon
                                    onClick={() => removeMenuItem(food.id)}
                                    color='primary'
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                />
                                <div>
                                    {food.name}
                                </div>
                            </div>
                            <button className={`pr-3 pl-2 ${food.available ? 'bg-green-500' : 'bg-red-500'} text-center text-white rounded`}
                                onClick={() => changeStatusMenuItem(food.id)}
                            >
                                {food.available ? 'AVAILABLE' : 'OUT OF STOCK'}
                            </button>
                        </div>
                    ))
                    : null
            }
        </div >
    )
}


export default FoodList;