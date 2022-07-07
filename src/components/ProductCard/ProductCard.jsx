import "./productcard.css";
import { useCart, useWishlist } from "../../contexts";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import { useState } from "react";
import { toastHandler } from "../../utils/toastHandler";

const ProductCard = ({ product }) => {

    const { cartState, addToCart } = useCart();
    const { state } = useAuth();

    const navigate = useNavigate();

    const [toastState, setToastState] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

    const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist();

    const { title, description, image, price, discountedPrice, rating, inStock } = product;

    const cartItemExist = cartState.cartItems.find((p) => p._id === product._id);

    const wishlistItemExist = wishlistState.wishlistItems.find((p) => p._id === product._id);

    return (
        <div className="card_image flex">
            <div className="card_vertical">
                <div className="card_vertical_info flex flex_col flex_justify_start">

                    <Link to={`/productlist/${product._id}`}>
                        <img className="img_responsive adjust_image" src={image} alt={title} />
                    </Link>

                    {wishlistItemExist
                        ? inStock && <button className="icon_btn" onClick={() => {
                            removeFromWishlist(product._id);
                            setToastMsg("Item Removed from Wishlist!");
                            toastHandler(setToastState);
                        }}>
                            <i className="fa fa-heart wishlist_icon"></i>
                        </button>
                        : inStock && state.isAuth 
                            ? <button className="icon_btn" onClick={() => {
                                addToWishlist(product);
                                setToastMsg("Item Added to Wishlist!");
                                toastHandler(setToastState);
                            }}>
                                <i className="far fa-heart wishlist_icon"></i>
                            </button>
                            : inStock && <Link className="icon_btn" to="/login" onClick={() => addToWishlist(product)}>
                                <i className="far fa-heart wishlist_icon"></i>
                            </Link>
                    }

                    <p className="card_text left_space">{title}</p>
                    <p className="card_subtext left_space overflow_desc">{description}</p>
                    <p className="card_text card_price left_space">₹ {new Intl.NumberFormat("en-IN").format(price)}
                        <span className="text_line_through">₹ {new Intl.NumberFormat("en-IN").format(discountedPrice)}</span>
                    </p>

                    {cartItemExist
                        ? <Link
                            className="btn btn_secondary_outline route_link btn_toast right_space btn_leading"
                            to="/cart" >
                            Go to Cart
                        </Link>
                        : state.isAuth 
                            ? <button
                                disabled={!inStock}
                                className={inStock ? "btn btn_secondary route_link btn_toast right_space btn_leading" : "btn btn_disabled route_link btn_toast right_space btn_leading"}
                                onClick={() => {
                                    addToCart(product);
                                    setToastMsg("Item Added to Cart!");
                                    toastHandler(setToastState);
                                }} >
                                {inStock ? "Add to Cart" : "Out of Stock"}
                            </button>
                            : <button
                                disabled={!inStock}
                                className={inStock ? "btn btn_secondary route_link btn_toast right_space btn_leading" : "btn btn_disabled route_link btn_toast right_space btn_leading"}
                                onClick={() => { 
                                    navigate("/login"); 
                                    addToCart(product);
                                }}
                            >   
                                {inStock ? "Add to Cart" : "Out of Stock"}
                            </button>
                    }

                    <span className="pill">{rating} ⭐</span>

                </div>
            </div>

            {toastState && 
                <div 
                    className="toast product_toast toast_active_leading toast_position">
                    <span> 
                        {toastMsg} 
                    </span>
                </div> 
            }

        </div>
    );
}

export { ProductCard };