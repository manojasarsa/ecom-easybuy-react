import "./singleproduct.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components";
import { useAuth, useProduct, useCart, useWishlist } from "../../contexts";

const SingleProduct = () => {

    const { productId } = useParams();

    const { products } = useProduct();

    const navigate = useNavigate();

    const matchedProduct = products?.find((prod) => prod._id === productId);

    const { cartState, addToCart } = useCart();

    const { state } = useAuth();

    const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist();

    const cartItemExist = cartState.cartItems.find((p) => p._id === matchedProduct._id);

    const wishlistItemExist = wishlistState.wishlistItems.find((p) => p._id === matchedProduct._id);

    return (
        <div>
            <Header />

            <div className="flex">

                <div className="card_grids cards_wrap flex">

                    <img className="img_responsive" src={matchedProduct.image} alt={matchedProduct.title} />

                    <div className="card_horizontal_text card flex flex_col single_prod">

                        {wishlistItemExist
                            ? matchedProduct.inStock && <button className="btn_icon" onClick={() => removeFromWishlist(matchedProduct._id)}>
                                <i className="fa fa-heart wish_icon"></i>
                            </button>
                            : matchedProduct.inStock && state.isAuth ? <button className="btn_icon" onClick={() => addToWishlist(matchedProduct)}>
                                <i className="far fa-heart wish_icon"></i>
                            </button>
                                : matchedProduct.inStock && <Link className="btn_icon" to="/login" onClick={() => addToWishlist(matchedProduct)}>
                                    <i className="far fa-heart wish_icon"></i>
                                </Link>
                        }

                        <p className="single_product_text left_space">{matchedProduct.description}</p>
                        <p className="single_product_sub left_space">{matchedProduct.title}</p>

                        <h1 className="pill">{matchedProduct.rating} ⭐</h1>
                        <p className="single_product_price card_price left_space">₹ {new Intl.NumberFormat("en-IN").format(matchedProduct.discountedPrice)}
                            <span className="text_line_through">₹ {new Intl.NumberFormat("en-IN").format(matchedProduct.price)}</span>
                        </p>

                        {cartItemExist
                            ? <Link
                                className="btn btn_secondary route_link btn_toast right_space btn_leading"
                                to="/cart" >
                                Go to Cart
                            </Link>
                            : state.isAuth ? <button
                                disabled={!matchedProduct.inStock}
                                className={matchedProduct.inStock ? "btn btn_secondary route_link btn_toast right_space btn_leading" : "btn btn_disabled route_link btn_toast right_space btn_leading"}
                                onClick={() => addToCart(matchedProduct)} >
                                {matchedProduct.inStock ? "Add to Cart" : "Out of Stock"}
                            </button>
                                : <button
                                    disabled={!matchedProduct.inStock}
                                    className={matchedProduct.inStock ? "btn btn_secondary route_link btn_toast right_space btn_leading" : "btn btn_disabled route_link btn_toast right_space btn_leading"}

                                    onClick={() => {
                                        navigate("/login");
                                        addToCart(matchedProduct);
                                    }}
                                >
                                    {matchedProduct.inStock ? "Add to Cart" : "Out of Stock"}
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SingleProduct };