import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Services from "./components/Services";
import Sales from "./components/Sales";
import Inventory from "./components/Inventory";
import ServicesAf from "./components/after_login/sidebar_pages/ServicesAf";
import SalesAf from "./components/after_login/sidebar_pages/SalesAf";
import InventoryAf from "./components/after_login/sidebar_pages/InventoryAf";
import BranchesAf from "./components/after_login/sidebar_pages/BranchesAf";
import Dashboard from "./components/after_login/sidebar_pages/Dashboard";
import ReportsAf from "./components/after_login/sidebar_pages/ReportsAf";
import Tsidebar from "./components/after_login/sidebar/Tsidebar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Logout from "./components/Logout";
import CustomerDetailsForm from "./components/after_login/sidebar_pages/CustomerDetailsForm";
import Jobsheet from "./components/after_login/sidebar_pages/Jobsheet";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicesProduct" element={<Services />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/salesProduct" element={<Sales />} />
          <Route path="/inventoryProduct" element={<Inventory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/createjobsheet" element={<Jobsheet/>} />
          <Route path="/createCustomer" element={<CustomerDetailsForm />} />
          <Route
            path="/services"
             element={<ServicesAf/>} />
          
          <Route path="/sales" element={<ProtectedRoute element={SalesAf} />} />
          <Route
            path="/inventory"
            element={<ProtectedRoute element={InventoryAf} />}
          />
          <Route
            path="/branches"
            element={<ProtectedRoute element={BranchesAf} />}
          />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={Dashboard} />}
          />
          <Route
            path="/reports"
            element={<ProtectedRoute element={ReportsAf} />}
          />
          <Route
            path="/Tsidebar"
            element={<ProtectedRoute element={Tsidebar} />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
