import React from "react"
import { Route } from "react-router-dom"
import Register from "../auth/Register.jsx";
import Login from '../auth/Login.jsx';
import Profile from "../user/Profile.jsx";
import UpdateProfile from "../user/UpdateProfile.jsx";
import ProtectedRoute from "../auth/ProtectedRoute.jsx";
import UploadAvatar from "../user/UploadAvatar.jsx";
import UpdatePassword from "../user/UpdatePassword.jsx";
import ForgotPassword from "../user/ForgotPassword.jsx"
import ResetPassword from "../auth/ResetPassword.jsx"
import Cart from "../cart/Cart.jsx";
import Shipping from "../cart/Shipping.jsx"
import ConfirmOrder from "../cart/ConfirmOrder.jsx";
import PaymentMethod from "../cart/PaymentMethod.jsx";
import MyOrders from "../order/MyOrders.jsx";
import OrderDetails from "../order/OrderDetails.jsx";
import Invoice from "../invoice/invoice.jsx";
import ProductDetails from "../layouts/product/productDetails.jsx";
import Home from "../layouts/home"
import ContactInfo from "../user/ContactInfo.jsx";
import BioData from "../user/BioData.jsx";
import Attendance from "../layouts/Attendance.jsx";
import Result from "../layouts/Result.jsx";
import AttendSub from "../layouts/Attendsub.jsx";

const userRoutes = () => {

    return (
        <>
                <Route path = "" element = {
                <Register />} />       
        </>
    )

}

export default userRoutes