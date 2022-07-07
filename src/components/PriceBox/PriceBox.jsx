import "./pricebox.css";
import { useCart } from "../../contexts";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";
import { useOrder } from "../../contexts/orderContext";
import { useState } from "react";
import { toastHandler } from "../../utils/toastHandler";

const PriceBox = ({ deliveryAddress }) => {

    const { cartState, clearCart } = useCart();
    const { addOrder } = useOrder();
    const [toastMsg, setToastMsg] = useState("");
    const [toastState, setToastState] = useState(false);

    const cartCounter = cartState.cartItems.length;
    const totalPrice = cartCounter !== 0 && cartState.cartItems.reduce((acc, item) => acc + (item.discountedPrice * item.qty), 0);
    const totalDiscountedPrice = cartCounter !== 0 && cartState.cartItems.reduce((acc, item) => acc + Math.floor((item.discountedPrice * item.qty) * 10 / 100), 0);

    const finalAmount = totalPrice - totalDiscountedPrice + 99;
    const savedAmount = totalPrice - finalAmount;

    const { cartItems } = cartState;

    const navigate = useNavigate();

    const { pathname } = useLocation();

    // Razorpay Integration

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;

            script.onload = () => {
                resolve(true)
            }

            script.onerror = () => {
                resolve(false);
            }

            document.body.appendChild(script);
        })
    };

    const displayRazorpay = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            return;
        }
        const options = {
            key: "rzp_test_GtfIaWmsadE9fA",
            amount: finalAmount * 100,
            currency: "INR",
            name: "",
            description: "Thanks for shopping with us!",
            image: "/assets/favicon.ico",
            handler: function (response) {
                const paymentId = response.razorpay_payment_id;
                const orderId = uuid();

                const newOrders = {
                    paymentId,
                    orderId,
                    amountPaid: finalAmount,
                    orderedProducts: [...cartItems],
                    deliveryAddress: deliveryAddress,
                    orderedAt: dayjs().format("DD/MM/YYYY hh:mmA"),
                };
                addOrder(newOrders);
                clearCart();
                navigate("/user/orders");
            },
            theme: {
                color: "hsl(204, 83%, 56%)",
            },
            prefill: {
                name: "Manoj Asarsa",
                email: "manojasarsa@example.com",
                contact: "9989545852",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div className="cart_price_box flex flex_col">

            <div className="purchased_items_wrapper flex flex_col">
                <h4 className="price_heading">PURCHASED ITEMS</h4>

                {cartItems.map(item =>
                    <div key={item._id} className="price_menu flex flex flex_justify_between">
                        <span
                            key={item._id}
                            className="price_name">
                            {item.title}
                        </span>
                        <span className="price_amount">
                            ₹ {new Intl.NumberFormat("en-IN").format(item.discountedPrice)} x {item.qty}
                        </span>
                    </div>
                )}
            </div>

            <h4 className="price_heading">PRICE DETAILS</h4>

            <div className="price_menu flex flex_justify_between">
                <span className="price_name">
                    Price ( {cartCounter} {cartCounter === 1 ? "item" : "items"})
                </span>
                <span className="price_amount">
                    ₹ {new Intl.NumberFormat("en-IN").format(totalPrice)}
                </span>
            </div>

            <div className="price_menu flex flex_justify_between">
                <span className="price_name">
                    Discount
                </span>
                <span className="price_amount">
                    - ₹ {new Intl.NumberFormat("en-IN").format(totalDiscountedPrice)}
                </span>
            </div>
            <div className="price_menu flex flex_justify_between">
                <span className="price_name">
                    Delivery Charges
                </span>
                <span className="price_amount">
                    ₹ {new Intl.NumberFormat("en-IN").format(99)}
                </span>
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
                <button
                    className="btn btn_secondary"
                    onClick={deliveryAddress ? () => {
                        setToastMsg("Payment in process, Please Wait!");
                        toastHandler(setToastState);
                        displayRazorpay();
                    } : () => {
                        setToastMsg("Select one address to continue!");
                        toastHandler(setToastState);
                    }}>
                    Proceed to Pay
                </button>
            )}

            {toastState && <div className="toast flex flex_justify_center flex_align_center toast_active_leading toast_position">
                <span> {toastMsg} </span>
            </div>}

        </div>
    );
}

export { PriceBox };