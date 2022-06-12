import "./productcard.css";
import { useCart, useWishlist } from "../../contexts";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";

const ProductCard = ({product}) => {

    const { cartState, addToCart } = useCart();
    const { state } = useAuth();

    const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist();

    const {title, description, image, price, discountedPrice, rating } = product;
    
    const cartItemExist = cartState.cartItems.find((p) => p._id === product._id);

    const wishlistItemExist = wishlistState.wishlistItems.find((p) => p._id === product._id);


    return (
        <div className="card_image flex">
            <div className="card_vertical">
                <div className="card_vertical_info flex flex_col flex_justify_start">

                    <Link to = {`/productlist/${product._id}`}>
                            <img className="img_responsive adjust_image" src={image} alt={title} />
                    </Link>

                    { wishlistItemExist
                    ? <button className="icon_btn" onClick={() => removeFromWishlist(product._id)}>
                        <i className="fa fa-heart wishlist_icon"></i>
                      </button>
                    : state.isAuth ? <button className="icon_btn" onClick={() => addToWishlist(product)}>
                        <i className="far fa-heart wishlist_icon"></i>
                      </button>
                      : <Link className="icon_btn" to="/login" onClick={() => addToWishlist(product)}>
                      <i className="far fa-heart wishlist_icon"></i>
                    </Link>
                    }

                    <p className="card_text left_space">{title}</p>
                    <p className="card_subtext left_space overflow_desc">{description}</p>
                    <p className="card_text card_price left_space">₹ {new Intl.NumberFormat("en-IN").format(price)}
                        <span className="text_line_through">₹ {new Intl.NumberFormat("en-IN").format(discountedPrice)}</span>
                    </p>

                    {cartItemExist
                    ?   <Link
                            className="btn btn_secondary_outline route_link btn_toast right_space btn_leading"
                            to="/cart" >
                            Go to Cart
                        </Link>
                    :  state.isAuth ? <button
                            className="btn btn_secondary route_link btn_toast right_space btn_leading"
                            onClick={() => addToCart(product)} >
                            Add to Cart 
                        </button>  
                        :   <Link
                                className="btn btn_secondary route_link btn_toast right_space btn_leading"
                                onClick={() => addToCart(product)} 
                                to="/login">
                                Add to Cart 
                            </Link>
                    }
                    
                    <span className="pill">{rating} ⭐</span>

                    <div className="alert_success toast flex flex_justify_center flex_align_center  toast_box">
                        <i className="fa-solid fa-check"></i>
                        <span>Added to Cart - check it out! </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {ProductCard};