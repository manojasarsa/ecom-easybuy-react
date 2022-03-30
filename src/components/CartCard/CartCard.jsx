import "./cartcard.css";
// import { useCart } from "../../contexts";

const CartCard = ({product}) => {

    // const { cartDispatch } = useCart();

    const {title, description, image, price, discountedPrice } = product;

    return (

        <div className="card_grid">

            <div className="cart_img">
                <img className="img_responsive" src={image} alt={title} />
            </div>

            <div className="card_horizontal_text flex flex_col">

                <p className="card_text left_space">{title}</p>
                <p className="card_subtext left_space">{description}</p>
                <p className="card_text card_price left_space">₹ {new Intl.NumberFormat("en-IN").format(price)}
                    <span className="text_line_through">₹ {new Intl.NumberFormat("en-IN").format(discountedPrice)}</span>
                </p>

                <div className="cart_qty flex flex_justify_center flex_align_center">
                    <p className="qty_name">Quantity:</p>
                    <button className="qty_minus"> - </button>
                    <input className="qty_input" type="number" value="1" />
                    <button className="qty_add"> + </button>
                </div>

                <button  
                className="btn btn_primary_outline btn_toast right_space btn_leading">Remove from Cart</button>
                {/* onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: product })} */}

                <div className="alert_success toast flex flex_justify_center flex_align_center toast_box">
                    <i className="fa-solid fa-check"></i>
                    <span>Removed from Cart! </span>
                </div>

                <button className="btn btn_secondary btn_toast right_space btn_leading">Move to Wishlist</button>

                <div className="alert_success toast flex flex_justify_center flex_align_center  toast_box">
                    <i className="fa-solid fa-check"></i>
                    <span>Moved to Wishlist - check it out! </span>
                </div>    

            </div>        
        </div>
    );
}

export {CartCard};