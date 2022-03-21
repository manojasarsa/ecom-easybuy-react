import "./cart.css";
import {Header, CartCard, PriceBox} from "../../components";

const Cart = () => {
    return (
        <div class="cart_wrapper">
            <Header />
            <main class="cart_container flex flex_col">
                <h2 class="cart_title">MY CART (1)</h2>
                <div class="cart_box flex flex_wrap">

                    <CartCard />
                    <PriceBox />
                </div>
            </main>
        </div>
    );
}

export {Cart};