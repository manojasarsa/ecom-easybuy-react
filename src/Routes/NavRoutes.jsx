import Mockman from "mockman-js";
import {Home} from "../pages";
import {ProductList} from "../pages";
import {Cart} from "../pages";
import {Wishlist} from "../pages";
import {Login} from "../pages";
import {Logout} from "../pages";
import {SignUp} from "../pages";
import {ForgotPwd} from "../pages";
import {Profile} from "../pages";
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
            <Route path="/login" element = {<Login />} />
            <Route path="/logout" element = {<Logout />} />
            <Route path="/signup" element = {<SignUp />} />
            <Route path="/forgotpwd" element = {<ForgotPwd />} />
            <Route path="/mock" element = {<Mockman />} />
        </Routes>
    )
}

export {NavRoutes};