import "./productcard.css";

const ProductCard = ({product}) => {

    const {title, description, image, price, discountedPrice, rating } = product;

    return (
        <div className="card_image flex">
            <div className="card_vertical">
                <div className="card_vertical_info flex flex_col flex_justify_start flex_wrap">
                    <img className="img_responsive adjust_image" src={image} alt={title} />
                    <p className="card_text left_space">{title}</p>
                    <p className="card_subtext left_space overflow_desc">{description}</p>
                    <p className="card_text card_price left_space">₹ {new Intl.NumberFormat("en-IN").format(price)}
                        <span className="text_line_through">₹ {new Intl.NumberFormat("en-IN").format(discountedPrice)}</span>
                    </p>
                    
                    <button className="btn btn_secondary btn_toast right_space btn_leading">Add to Cart</button>
                    <i className="fa-solid fa-heart icon"></i>
                    <span className="pill">{rating}⭐</span>

                    <div className="alert_success toast flex flex_justify_center flex_align_center  toast_box">
                        <i className="fa-solid fa-check"></i>
                        <span>Added to Cart - check it out! </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {ProductCard};