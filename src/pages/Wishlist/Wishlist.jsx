import "./wishlist.css";
import {Header, WishlistCard} from "../../components";

const Wishlist = () => {
    return (
        <main class="wishlist_wrapper">
            <Header />
            <h2 class="cart_title">MY WISHLIST</h2>
            <div class="wishlist_items">
                <WishlistCard />
                <WishlistCard />
                <WishlistCard />
                <WishlistCard />
            </div>
        /</main>
    );
}

export {Wishlist};