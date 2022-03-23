import "./cartcard.css";

const CartCard = () => {
    return (
        <div className="card_grid">
            <div className="cart_img">
                <img className="img_responsive" src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/women2.jpg" alt="shopping-item" />
            </div>

            <div className="card_horizontal_text flex flex_col">
                <p className="card_text left_space">Women Premium Jacket</p>
                <p className="card_subtext left_space">Cotton Super Combed Fabric</p>
                <p className="card_text card_price left_space">₹2,999
                    <span className="text_line_through">₹4,999</span>
                </p>
                <div className="cart_qty flex flex_justify_center flex_align_center">
                    <p className="qty_name">Quantity:</p>
                    <button className="qty_minus"> - </button>
                    <input className="qty_input" type="number" value="1" />
                    <button className="qty_add"> + </button>
                </div>
                <button className="btn btn_primary_outline btn_toast right_space btn_leading">Remove from Cart</button>

                <div className="alert_success toast flex flex_justify_center flex_align_center toast_box">
                    <i className="fa-solid fa-check"></i>
                    <span>Removed from Cart! </span>
                </div>
                <button className="btn btn_secondary btn_toast right_space btn_leading">Move to Wishlist</button>

                <div className="alert_success toast flex flex_justify_center flex_align_center  toast_box">
                    <i className="fa-solid fa-check"></i>
                    <span>Moved to Wishlist - check it out! </span>
                </div>    

            </div>        
        </div>
    );
}

export {CartCard};