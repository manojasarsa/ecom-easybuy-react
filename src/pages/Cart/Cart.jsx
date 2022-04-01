import "./cart.css";
import { Header, CartCard, PriceBox } from "../../components";
import { useCart } from "../../contexts";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartState } = useCart();
    const cartCounter = cartState.cartItems.length;
    const totalPrice = cartCounter !== 0 && cartState.cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const totalDiscountedPrice = cartCounter !== 0 && cartState.cartItems.reduce((acc, item) => acc + (item.discountedPrice * item.qty), 0);


    console.log("totalPrice in Cart:", totalPrice);
    console.log("discounted totalPrice in Cart:", totalDiscountedPrice);
    return (

        <div className="cart_wrapper">
            <Header />
            {cartCounter !== 0
            ?
            <main className="cart_container flex flex_col">
                {cartCounter === 0 
                    ? <h2 className="cart_title"> MY CART </h2>
                    : <h2 className="cart_title">MY CART({cartCounter})</h2>
                }
                <div className="cart_box ">
                    <div className="cart_box_items">
                        {cartState.cartItems.map((item) => <CartCard key={item._id} product={item} /> )}
                    </div>
                    {cartCounter !== 0 && <PriceBox tPrice={totalPrice} dPrice={totalDiscountedPrice} /> }   
                </div>
            </main>
            : 
            <div className="empty_cart flex flex_col flex_justify_start flex_align_center"> 
                <img src="../../assets/cart.svg" />
                <h1>Your cart is empty!</h1>
                <h3>Add items to it now.</h3>
                <Link className="btn btn_secondary" to="/productlist">Shop Now</Link>
            </div>
            }

        </div>
    );
}

export {Cart};

