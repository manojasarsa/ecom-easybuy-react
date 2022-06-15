import "./pricebox.css";
import { useCart } from "../../contexts";
import { useLocation, useNavigate } from "react-router-dom";

const PriceBox = ({ deliveryAddress }) => {

    const { cartState } = useCart();
    const cartCounter = cartState.cartItems.length;
    const totalPrice = cartCounter !== 0 && cartState.cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const totalDiscountedPrice = cartCounter !== 0 && cartState.cartItems.reduce((acc, item) => acc + (item.discountedPrice * item.qty), 0);

    const finalAmount = totalPrice - totalDiscountedPrice + 99;
    const savedAmount = totalPrice - finalAmount;

    const { cartItems } = cartState;

    const navigate = useNavigate();

    const { pathname } = useLocation();

    console.log("delivery add - ", deliveryAddress)

    return (
        <div className="cart_price_box flex flex_col">

            <div className="purchased_items_wrapper flex flex_col">
                <h4 className="price_heading">PURCHASED ITEMS</h4>

                {cartItems.map(item =>
                    <div className="price_menu flex flex flex_justify_between">
                        <span
                            key={item._id}
                            className="price_name">
                            {item.title}
                        </span>
                        <span className="price_amount">₹ {new Intl.NumberFormat("en-IN").format(item.price)} x {item.qty} </span>
                    </div>
                )}
            </div>

            <h4 className="price_heading">PRICE DETAILS</h4>

            <div className="price_menu flex flex_justify_between">
                <span className="price_name">Price ( {cartCounter} {cartCounter === 1 ? "item" : "items"})</span>
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

            {pathname === "/checkout" && deliveryAddress && (
                <div className="delivery_addr_wrapper">
                    <h3>DELIVERY ADDRESS</h3>
                    <address className="address_box flex flex_col">
                        <h4>{deliveryAddress.name}</h4>
                        <span>{deliveryAddress.street}</span>
                        <span>{deliveryAddress.city}</span>
                        <span>{deliveryAddress.country}</span>
                        <span>{deliveryAddress.zipCode}</span>
                        <span>{deliveryAddress.mobile}</span>
                    </address>
                </div>
                )}

            {pathname === "/cart" ? (
                <button className="btn btn_secondary"
                    onClick={() => navigate("/checkout")}>
                    PLACE ORDER
                </button>
            ) : (
                <button className="btn btn_secondary"
                >
                    Proceed to Pay
                </button>
            )}
        </div>
    );
}

export { PriceBox };