import "./singleproduct.css";
import { Link, useParams } from "react-router-dom";
import { Header} from "../../components";
import { useAuth, useProduct, useCart, useWishlist } from "../../contexts";

const SingleProduct = () => {

      const { productId } = useParams();

      const { products } = useProduct();

      const matchedProduct = products?.find((prod) => prod._id === productId);

      const { cartState, addToCart } = useCart();

      const { state } = useAuth();

      const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist();

      // const {title, description, image, price, discountedPrice, rating } = product;
      
      const cartItemExist = cartState.cartItems.find((p) => p._id === matchedProduct._id);

      const wishlistItemExist = wishlistState.wishlistItems.find((p) => p._id === matchedProduct._id);

      return (
            <div>
                  <Header />

                  <div className="card_grids cards_wrap flex">

                        <img className="img_responsive" src={matchedProduct.image} alt={matchedProduct.title} />

                        <div className=".card_horizontal_text card flex flex_col">

                              { wishlistItemExist
                                    ? <button className="btn_icon" onClick={() => removeFromWishlist(matchedProduct._id)}>
                                          <i className="fa fa-heart wish_icon"></i>
                                    </button>
                                    : state.isAuth ? <button className="btn_icon" onClick={() => addToWishlist(matchedProduct)}>
                                          <i className="far fa-heart wish_icon"></i>
                                    </button>
                                    : <Link className="btn_icon" to="/login" onClick={() => addToWishlist(matchedProduct)}>
                                    <i className="far fa-heart wish_icon"></i>
                                    </Link>
                              }

                              <p className="single_product_text left_space">{matchedProduct.title}</p>
                              <p className="single_product_sub left_space">{matchedProduct.description}</p>
                              <h1 className="pill">{matchedProduct.rating} ⭐</h1>
                              <p className="single_product_price card_price left_space">₹ {new Intl.NumberFormat("en-IN").format(matchedProduct.price)}
                                    <span className="text_line_through">₹ {new Intl.NumberFormat("en-IN").format(matchedProduct.discountedPrice)}</span>
                              </p>

                              {cartItemExist
                              ?   <Link
                                    className="btn btn_secondary route_link btn_toast right_space btn_leading"
                                    to="/cart" >
                                    Go to Cart
                              </Link>
                              :  state.isAuth ? <button
                                    className="btn btn_secondary route_link btn_toast right_space btn_leading"
                                    onClick={() => addToCart(matchedProduct)} >
                                    Add to Cart 
                              </button>  
                              : <Link
                                    className="btn btn_secondary route_link btn_toast right_space btn_leading"
                                    onClick={() => addToCart(matchedProduct)} 
                                    to="/login">
                                    Add to Cart 
                              </Link>
                              }
                        </div>  
                  </div>
            </div>     
      )
}

export {SingleProduct};