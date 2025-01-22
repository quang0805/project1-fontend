import React from "react";
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { RestaurantMenu, TableChart, CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="bg-slate-800 h-[120vh]">
            <Box sx={{ width: 240, color: "#fff" }}>
                <List>
                    <ListItem button component={Link} to="/admin/create-menu-item">
                        <ListItemIcon>
                            <RestaurantMenu />
                        </ListItemIcon>
                        <ListItemText primary="Thêm Đồ Ăn" />
                    </ListItem>
                    <Divider />
                    <ListItem button component={Link} to="/admin/create-table">
                        <ListItemIcon>
                            <TableChart />
                        </ListItemIcon>
                        <ListItemText primary="Tạo Bàn" />
                    </ListItem>
                    <Divider />
                    <ListItem button component={Link} to="/admin/confirm-orders">
                        <ListItemIcon>
                            <CheckCircle />
                        </ListItemIcon>
                        <ListItemText primary="Xác Nhận Order" />
                    </ListItem>
                    <Divider />
                </List>
            </Box>

        </div>
    );
}
