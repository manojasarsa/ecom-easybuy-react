import Mockman from "mockman-js";
import {Home, ProductList, Cart, Wishlist, Login, Logout, SignUp, Profile, SingleProduct} from "../pages";
import {Routes, Route} from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";

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
                }
            ></Route>
            <Route 
                path="/wishlist" 
                element= {
                    <PrivateRoutes>
                        <Wishlist />
                    </PrivateRoutes>
                }
            ></Route>
            <Route 
                path="/profile" 
                element= {
                    <PrivateRoutes>
                        <Profile />
                    </PrivateRoutes>
                }
            ></Route>

            <Route path="/productlist/:productId" element = {<SingleProduct />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/logout" element = {<Logout />} />
            <Route path="/signup" element = {<SignUp />} /> 
            <Route path="/mock" element = {<Mockman />} />
        </Routes>
    )
}

export {NavRoutes};