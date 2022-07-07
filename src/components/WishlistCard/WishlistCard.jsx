import "./wishlistcard.css";
import { useCart, useWishlist } from "../../contexts";
import { Link } from "react-router-dom";

const WishlistCard = ({product}) => {

    const {title, description, image, price, discountedPrice, rating } = product;

    const { cartState, addToCart } = useCart();

    const { removeFromWishlist } = useWishlist();
    
    const cartItemExist = cartState.cartItems.find((p) => p._id === product._id);

    return (
        <div className="card_image flex">
            <div className="card_vertical">
                <div className="card_vertical_info flex flex_col flex_justify_start">
                    <img className="img_responsive adjust_image" src={image} alt={title} />

                    <button className="icon_btn" onClick={() => removeFromWishlist(product._id)}>
                        <i className="fa fa-heart wishlist_icon"></i>
                    </button>

                    <p className="card_text left_space wishlist_margin">{title}</p>
                    <p className="card_subtext left_space overflow_desc">{description}</p>
                    <p className="card_text card_price left_space">₹ {new Intl.NumberFormat("en-IN").format(discountedPrice)}
                        <span className="text_line_through">₹ {new Intl.NumberFormat("en-IN").format(price)}</span>
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
                    
                    <span className="pill pill_wishlist">{rating} ⭐</span>

                </div>
            </div>
        </div>
    );
}

export {WishlistCard};