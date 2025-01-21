import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./components/customer/Table";
import Menu from "./components/customer/Menu";
import OrderManagement from "./components/admin/OrderManagement";
import FoodCard from "./components/customer/FoodCard";
import { ClassNames } from "@emotion/react";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/menu/:tableId" element={<Menu />} />
          <Route path="/admin" element={<OrderManagement />} />

        </Routes>
      </div>
    </Router>



    // <>
    //   <Menu />
    // </>
  );
}

export default App;
