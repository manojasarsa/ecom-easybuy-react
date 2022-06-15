import Mockman from "mockman-js";
import {Home, ProductList, Cart, Wishlist, Login, Logout, SignUp, Profile, SingleProduct, Checkout} from "../pages";
import {Routes, Route} from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { UserAddress } from "../pages/Profile/UserAddress";
import { UserOrders } from "../pages/Profile/UserOrders";

const NavRoutes = () => {
    return (
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/productlist" element = {<ProductList />} />
            <Route 
                path="/cart" 
                element= {
                    <PrivateRoutes>
                        <Cart />
                    </PrivateRoutes>
                }>
            </Route>
            <Route 
                path="/wishlist" 
                element= {
                    <PrivateRoutes>
                        <Wishlist />
                    </PrivateRoutes>
                }>
            </Route>
            <Route 
                path="/user/profile" 
                element= {
                    <PrivateRoutes>
                        <Profile />
                    </PrivateRoutes>
                }>
            </Route>
            <Route 
                path="/user/address" 
                element= {
                    <PrivateRoutes>
                        <UserAddress />
                    </PrivateRoutes>
                }>
            </Route>
            <Route 
                path="/user/orders" 
                element= {
                    <PrivateRoutes>
                        <UserOrders />
                    </PrivateRoutes>
                }>
            </Route>
            <Route 
                path="/checkout" 
                element= {
                    <PrivateRoutes>
                        <Checkout />
                    </PrivateRoutes>
                }>
            </Route>

            <Route path="/productlist/:productId" element = {<SingleProduct />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/logout" element = {<Logout />} />
            <Route path="/signup" element = {<SignUp />} /> 
            <Route path="/mock" element = {<Mockman />} />
        </Routes>
    )
}

export {NavRoutes};