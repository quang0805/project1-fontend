import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./components/customer/Table";
import Menu from "./components/customer/Menu";
import AdminPage from "./components/admin/AdminPage";
import CreateMenuItem from "./components/admin/CreateMenuItem";
import CreateTable from "./components/admin/CreateTable";
import ConfirmOrders from "./components/admin/ConfirmOrders"


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/menu/:tableId" element={<Menu />} />
          <Route path="/admin/create-menu-item" element={<CreateMenuItem />} />
          <Route path="/admin/create-table" element={<CreateTable />} />
          <Route path="/admin/confirm-orders" element={<ConfirmOrders />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
    // <>
    //   <Menu />
    // </>
  );
}
export default App;
