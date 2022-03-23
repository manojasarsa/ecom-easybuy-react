import "./wishlistcard.css";

const WishlistCard = () => {
    return (
        <div className="card_image flex">
            <div className="card_vertical">
                <div className="card_vertical_info flex flex_col flex_justify_start flex_wrap">
                    <img className="img_responsive adjust_image" src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/blackdenim.jpg" alt="shopping-item" />
                    <p className="card_text left_space">Levis Blue Denim Jacket</p>
                    <p className="card_subtext left_space">Captivate look with this Denim Jacket</p>
                    <p className="card_text card_price left_space">₹2,999
                        <span className="text_line_through">₹4,999</span>
                    </p>

                    <button className="btn btn_secondary btn_toast right_space btn_leading">Move to Cart</button>
                    <i className="fa-solid fa-heart icon"></i>
                    <span className="pill">Sale</span>

                    <div className="alert_success toast flex flex_justify_center flex_align_center  toast_box">
                        <i className="fa-solid fa-check"></i>
                        <span>Moved to Cart - check it out! </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {WishlistCard};