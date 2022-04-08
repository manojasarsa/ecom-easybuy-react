import "./cartcard.css";
import { useCart, useWishlist } from "../../contexts";

const CartCard = ({product}) => {

    const { removeFromCart, updateQty } = useCart();

    const { addToWishlist } = useWishlist();

    const {_id, title, description, image, price, discountedPrice, qty } = product;

    return (

        <div className="card_grid card_wrap">
            <div className="cart_img">
                <img className="img_responsive" src={image} alt={title} />
            </div>
            <div className="card_horizontal_text flex flex_col">

                <p className="card_text left_space">{title}</p>
                <p className="card_subtext left_space overflow_desc">{description}</p>
                <p className="card_text card_price left_space">₹ {new Intl.NumberFormat("en-IN").format(price)}
                    <span className="text_line_through">₹ {new Intl.NumberFormat("en-IN").format(discountedPrice)}</span>
                </p>

                <div className="cart_qty flex flex_justify_center flex_align_center">
                    <p className="qty_name">Quantity:</p>
                    <button className="qty_minus"
                    disabled = {qty === 1 ? true : false}
                    onClick = {() => updateQty("decrement", _id)}> - </button>
                    <span className="qty"> {qty} </span>
                    <button className="qty_add" onClick = {() => updateQty("increment", _id)}> + </button>
                </div>

                <button  
                    className="btn btn_primary_outline btn_toast right_space btn_leading"
                    onClick={() => removeFromCart(_id)}>
                    Remove from Cart
                </button>

                <div className="alert_success toast flex flex_justify_center flex_align_center toast_box">
                    <i className="fa-solid fa-check"></i>
                    <span>Removed from Cart! </span>
                </div>

                <button onClick={() => addToWishlist(product)} className="btn btn_secondary btn_toast right_space btn_leading">Move to Wishlist</button>

                <div className="alert_success toast flex flex_justify_center flex_align_center  toast_box">
                    <i className="fa-solid fa-check"></i>
                    <span>Moved to Wishlist - check it out! </span>
                </div>    
            </div>  
        </div>
    );
}

export {CartCard};