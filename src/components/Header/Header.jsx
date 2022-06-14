import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu";
import { useAuth, useWishlist, useFilter} from "../../contexts";
import { useCart } from "../../contexts";

const Header = () => {

    const [menu, setMenu] = useState(false);

    const { dispatch } = useFilter();

    const navigate = useNavigate();

    const { state } = useAuth();
    
    const { cartState } = useCart();
    const cartCounter = cartState.cartItems.length;

    const { wishlistState } = useWishlist();    
    const wishlistCounter = wishlistState.wishlistItems.length;

    const menuHandler = () => menu ? setMenu(false) : setMenu(true);

    return (
        <header className="main_header">
            <div className="navigation flex flex_justify_between flex_align_center" id="header_box">
                <div className="nav_left logo">
                    <Link className="header_logo" to="/">easYbuY</Link>
                    <p className="tagline">We Value Your Choices</p>
                </div>

                <div className="nav_center searchbar">
                    
                        <input 
                            name="search"
                            className="input input_search search" 
                            type="text" 
                            placeholder="Search for products, brands and more"
                            onChange={(e) => dispatch({type: "SET_SEARCH_QUERY", payload: e.target.value})}
                        />

                        <i class="fa-solid fa-magnifying-glass search_icon" 
                            onClick={() => navigate("/productlist")}>
                        </i>
                </div>

                <div className="nav_right flex flex_justify_between flex_align_center">

                    {state.isAuth ? (
                        <Link 
                            className="cta_btn btn btn_secondary_outline" 
                            to="/productlist">
                            Shop Now
                        </Link>) : (
                        <Link 
                            className="cta_btn btn btn_primary_outlined" 
                            to="/login">
                            Login
                        </Link>)
                    }

                    <Link className="badge_container badge_icon" to="#">
                        <i onClick={menuHandler} className="fas fa-user-circle profile"></i>
                    </Link> 

                    {menu && <ProfileMenu />}

                    <div className="badge_container badge_icon">
                        <Link className="header_logo" to="/wishlist">
                            <i className="fa-regular fa-heart"></i>
                            {wishlistCounter === 0 ? "" : 
                            <span 
                                className="badge_icon_num badge_status flex flex_justify_center flex_align_center">
                                {wishlistCounter}
                            </span>}
                        </Link>
                    </div>

                    <div className="badge_container badge_icon">
                        <Link className="header_logo" to="/cart">
                            <i className="fa fa-shopping-cart"></i>

                            {cartCounter === 0 ? "" : 
                            <span 
                                className="badge_icon_num badge_status flex flex_justify_center flex_align_center">
                                {cartCounter}
                            </span>}

                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export {Header};