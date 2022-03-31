import "./cart.css";
import { Header, CartCard, PriceBox } from "../../components";
import { useCart } from "../../contexts";

const Cart = () => {

    const { cartState } = useCart();

    return (

        <div className="cart_wrapper">
            <Header />
            <main className="cart_container flex flex_col">
            {/* {cartState.cartCounter !== 0 
                ? <h2 className="cart_title">MY CART({cartState.cartCounter})</h2> 
                : <h2 className="cart_title"> MY CART </h2>
            }               */}

                <h2 className="cart_title"> MY CART(0) </h2>

                <div className="cart_box ">

                    <div className="cart_box_items">

                        {cartState.cartItems.map((item) => <CartCard key={item._id} product={item} /> )}

                    </div>

                    {/* {cartState.cartCounter !== 0 && <PriceBox />} */}
                    <PriceBox />
                    
                </div>
            </main>
        </div>
    );
}

export {Cart};