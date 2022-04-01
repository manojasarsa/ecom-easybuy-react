import "./wishlistcard.css";
import { useCart } from "../../contexts";
import { useAuth } from "../../contexts";
import { useWishlist } from "../../contexts";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const WishlistCard = ({product}) => {

    const {_id, title, description, image, price, discountedPrice, qty, rating } = product;

    const { cartState, addToCart } = useCart();

    const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist();

    const { state } = useAuth();

    const navigate = useNavigate();
    
    const cartItemExist = cartState.cartItems.find((p) => p._id === product._id);

    const wishlistItemExist = wishlistState.wishlistItems.find((p) => p._id === product._id);

    return (
        <div className="card_image flex">
            <div className="card_vertical">
                <div className="card_vertical_info flex flex_col flex_justify_start">
                    <img className="img_responsive adjust_image" src={image} alt={title} />

                    <button className="icon_btn" onClick={() => removeFromWishlist(product._id)}>
                        <i className="fa fa-heart wishlist_icon"></i>
                    </button>

                    <p className="card_text left_space">{title}</p>
                    <p className="card_subtext left_space overflow_desc">{description}</p>
                    <p className="card_text card_price left_space">₹ {new Intl.NumberFormat("en-IN").format(price)}
                        <span className="text_line_through">₹ {new Intl.NumberFormat("en-IN").format(discountedPrice)}</span>
                    </p>

                    {cartItemExist
                    ?   <Link
                            className="btn btn_secondary route_link btn_toast right_space btn_leading"
                            to="/cart" >
                            Go to Cart
                        </Link>
                    :  <button
                            className="btn btn_secondary route_link btn_toast right_space btn_leading"
                            onClick={() => addToCart(product)} >
                            Move to Cart 
                        </button>  
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

export {WishlistCard};