import "./cartcard.css";
import { useCart, useWishlist } from "../../contexts";
import { useState } from "react";
import { toastHandler } from "../../utils/toastHandler";

const CartCard = ({ product }) => {

    const [isFetching, setIsFetching] = useState(false);
    const [toastState, setToastState] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

    const { removeFromCart, updateQty } = useCart();

    const { wishlistState, addToWishlist } = useWishlist();

    const { _id, title, description, image, price, discountedPrice, qty } = product;

    const wishlistItemExist = wishlistState.wishlistItems.find((item) => item._id === product._id);

    return (

        <div className="card_grid card_wrap">
            <div className="cart_img">
                <img className="img_responsive" src={image} alt={title} />
            </div>
            <div className="card_horizontal_text flex flex_col" id="horizontal_text_card">

                <p className="card_text left_space">{title}</p>
                <p className="card_subtext left_space overflow_desc">{description}</p>
                <p className="card_text card_price left_space">₹ {new Intl.NumberFormat("en-IN").format(price)}
                    <span className="text_line_through">₹ {new Intl.NumberFormat("en-IN").format(discountedPrice)}</span>
                </p>

                <div className="cart_qty flex flex_justify_center flex_align_center">
                    <p className="qty_name">Quantity:</p>
                    <button className="qty_minus"
                        disabled={qty <= 1 ? true : isFetching ? true : false}
                        onClick={() => updateQty("decrement", _id, setIsFetching)}> -
                    </button>
                    <span
                        className="qty"> {qty}
                    </span>
                    <button
                        disabled={isFetching}
                        className="qty_add" onClick={() => updateQty("increment", _id, setIsFetching)}> +
                    </button>
                </div>

                <button
                    className="btn btn_primary_outline btn_toast right_space btn_leading"
                    onClick={() => {
                        removeFromCart(_id);
                        setToastMsg("Item Removed from Cart!");
                        toastHandler(setToastState);
                    }}>
                    Remove from Cart
                </button>

                {wishlistItemExist
                    ? <button
                        onClick={() => {
                            removeFromCart(_id);
                            setToastMsg("Item Already Exist in Wishlist!");
                            toastHandler(setToastState);
                        }}
                        className="btn btn_secondary btn_toast right_space btn_leading">
                        Move to Wishlist
                    </button>
                    : <button
                        onClick={() => {
                            addToWishlist(product);
                            removeFromCart(_id);
                            setToastMsg("Item Moved to Wishlist!");
                            toastHandler(setToastState);
                        }}
                        className="btn btn_secondary btn_toast right_space btn_leading">
                        Move to Wishlist
                    </button>
                }
                {toastState && <div class="toast flex flex_justify_center flex_align_center toast_box toast_active_leading toast_position">
                    <span> {toastMsg} </span>
                </div>}
            </div>
        </div>
    );
}

export { CartCard };