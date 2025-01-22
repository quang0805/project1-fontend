import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import axios from "axios";
import TableCard from '../Card/TableCard'

const Table = () => {
    const [tables, setTables] = useState([]);
    const navigate = useNavigate();

    const handleTableSelect = (tableId) => {
        navigate(`/menu/${tableId}`);
    };

    useEffect(() => {
        try {
            const fetchTables = async () => {
                const response = await axios.get('http://localhost:8080/tables');
                setTables(response.data);
            }
            fetchTables();
        } catch (error) {
            alert(error);
        }
        const intervalId = setInterval(
            () => {
                try {
                    const fetchTables = async () => {
                        const response = await axios.get('http://localhost:8080/tables');
                        setTables(response.data);
                    }
                    fetchTables();
                } catch (error) {
                    alert(error);
                }
            }, 1000
        )
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className="text-center p-8 bg-table-background bg-cover h-screen">
            <h1 className="text-4xl text-blue-100 font-bold mb-4">Chọn Bàn</h1>
            <div className="flex justify-center gap-4">
                {tables.map((table) => (
                    <TableCard
                        key={table.id}
                        tableNumber={table.number}
                        status={table.status}
                        tableId={table.id}
                        onClick={() => handleTableSelect(table.number)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Table;
