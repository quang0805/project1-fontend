import React, { useEffect, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import Navbar from './Navbar'
import axios from "axios";;

export default function CreateTable() {
    const [tableNumber, setTableNumber] = useState("");
    const [tables, setTables] = useState([]);

    const handleSubmit = async () => {
        try {
            await axios.post(`http://localhost:8080/table/create?number=${tableNumber}`);
            alert("Table created successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to create table.");
        }
    };

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const response = await axios.get('http://localhost:8080/tables');
            setTables(response.data);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])


    return (
        <div className='flex'>
            <Navbar />
            <div>
                <div p={3}
                    className="ml-5 pt-3"
                >
                    <h2 className="font-bold text-2xl">Tạo Bàn</h2>
                    <TextField
                        label="Số bàn"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Tạo Bàn
                    </Button>
                </div>
                <div>
                    {
                        tables ?
                            <div className="flex">
                                {
                                    tables.map(
                                        table => <div>{table.id}</div>
                                    )
                                }
                            </div>
                            : null
                    }

                </div>
            </div>
        </div>
    );
}
