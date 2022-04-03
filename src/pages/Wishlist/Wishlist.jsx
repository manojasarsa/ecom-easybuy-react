import "./wishlist.css";
import { Header, WishlistCard } from "../../components";
import { useWishlist } from "../../contexts";
import { Link } from "react-router-dom";

const Wishlist = () => {

    const { wishlistState } = useWishlist();
    const wishlistCounter = wishlistState.wishlistItems.length;

    return (
        <main class="wishlist_wrapper">
            <Header />

            {wishlistCounter !== 0
            ?
            <div>

                {wishlistCounter === 0 
                    ? <h2 className="cart_title"> MY WISHLIST </h2>
                    : <h2 className="cart_title">MY WISHLIST({wishlistCounter})</h2>
                }


                <div className="wishlist_items">
                    {wishlistState.wishlistItems.map((item) => <WishlistCard key={item._id} product={item} /> )}
                </div>

            </div>
            : 
            <div className="empty_cart flex flex_col flex_justify_start flex_align_center"> 
                <img src="../../assets/cart.svg" alt="empty-wishlist" />
                <h1>Empty Wishlist</h1>
                <h3>You have no items in your wishlist. Start adding!</h3>
                <Link className="btn btn_secondary" to="/productlist">Shop Now</Link>
            </div>
            }

        </main>
    );
}

export {Wishlist};