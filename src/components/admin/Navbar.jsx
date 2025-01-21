import React from "react";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { RestaurantMenu, TableChart, CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Drawer variant="permanent" anchor="left">
            <Box sx={{ width: 240, bgcolor: "#f5f5f5", height: "100vh" }}>
                <List>
                    <ListItem button component={Link} to="/create-menu-item">
                        <ListItemIcon>
                            <RestaurantMenu />
                        </ListItemIcon>
                        <ListItemText primary="Thêm Đồ Ăn" />
                    </ListItem>
                    <ListItem button component={Link} to="/create-table">
                        <ListItemIcon>
                            <TableChart />
                        </ListItemIcon>
                        <ListItemText primary="Tạo Bàn" />
                    </ListItem>
                    <ListItem button component={Link} to="/confirm-orders">
                        <ListItemIcon>
                            <CheckCircle />
                        </ListItemIcon>
                        <ListItemText primary="Xác Nhận Order" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}
