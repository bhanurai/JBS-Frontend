import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Import the necessary components
import Forgetpassword, { default as ForgotPasswordCode } from "./pages/Forgetpassword";
import ResetPassword from "./pages/ResetPassword";
import SendEmail from "./pages/SendEmail";
import Navbar from "./components/NavBar";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminEditProduct from "./pages/admin/AdminEditProduct";
import UserDashboard from "./pages/user/UserDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddToCart from "./pages/user/AddToCart";
import Contact from "./pages/user/ContactUs";
import EditProfile from "./pages/user/EditProfile";
import HomePage from "./pages/user/HomePage";
import OrdersPage from "./pages/user/Orders";
import ProductDetails from "./pages/user/ProductDetails";
import Profile from "./pages/user/Profile";
import AddToFavorites from "./pages/user/Favorite"; 

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/sendemail" element={<SendEmail />} />
        <Route path="/resetcode" element={<ForgotPasswordCode />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/edit/:id" element={<AdminEditProduct />} />
        <Route path="/contactus" element={<Contact />} />

        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/productDetails/:id" element={<ProductDetails />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/user/Profile" element={<Profile />} />
        <Route path="/Profile/edit/:id" element={<EditProfile />} />

        <Route path="/user/cart" element={<AddToCart />} />
        <Route path="/user/orders" element={<OrdersPage />} />

        <Route path="/forgetpass" element={<Forgetpassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/user/favorites" element={<AddToFavorites />} />
      </Routes>
    </Router>
  );
}

export default App;
