import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import axios from "axios";

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
    }, [])

    return (
        <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Chọn Bàn</h1>
            <div className="flex justify-center gap-4">
                {tables.map((table) => (
                    <Button
                        key={table.id}
                        variant="contained"
                        color="primary"
                        onClick={() => handleTableSelect(table.number)}
                    >
                        Bàn {table.number}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Table;
