import "./pricebox.css";
import { useCart } from "../../contexts";

const PriceBox = (totalPrice) => {

    const { cartState } = useCart();
    const cartCounter = cartState.cartItems.length;
    const finalAmount = totalPrice.tPrice - totalPrice.dPrice + 99;
    const savedAmount = totalPrice.tPrice - finalAmount;
    
    return (
        <div className="cart_price_box flex flex_col">

            <h4>PRICE DETAILS</h4>

            <hr className="line_space" />

            <div className="price_menu flex flex_justify_between">
                <span className="price_name">Price ( {cartCounter} {cartCounter ===1 ? "item" : "items"})</span>
                <span className="price_amount">₹ {new Intl.NumberFormat("en-IN").format(totalPrice.tPrice)}</span>
            </div>
            <div className="price_menu flex flex_justify_between">
                <span className="price_name">Discount</span>
                <span className="price_amount">- ₹ {new Intl.NumberFormat("en-IN").format(totalPrice.dPrice)}</span>
            </div>
            <div className="price_menu flex flex_justify_between">
                <span className="price_name">Delivery Charges</span>
                <span className="price_amount">₹ {new Intl.NumberFormat("en-IN").format(99)}</span>
            </div>

            <hr className="line_space" />

            <div className="price_menu flex flex_justify_between">
                <h4> Total Amount</h4>
                <h4>₹ {new Intl.NumberFormat("en-IN").format(finalAmount)}</h4>
            </div>

            <hr className="line_space" />

            <h4 className="line_space total_amount">You will save ₹ {new Intl.NumberFormat("en-IN").format(savedAmount)} on this order</h4>

            <button className="btn btn_secondary">PLACE ORDER</button>

        </div>
    );
}

export {PriceBox};