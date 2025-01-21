import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Table = () => {
    const navigate = useNavigate();

    const handleTableSelect = (tableId) => {
        navigate(`/menu/${tableId}`);
    };

    return (
        <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Chọn Bàn</h1>
            <div className="flex justify-center gap-4">
                {[1, 2, 3, 4].map((tableId) => (
                    <Button
                        key={tableId}
                        variant="contained"
                        color="primary"
                        onClick={() => handleTableSelect(tableId)}
                    >
                        Bàn {tableId}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Table;
