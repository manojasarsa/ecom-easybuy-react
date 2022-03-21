import "./pricebox.css";

const PriceBox = () => {
    return (
        <div className="cart_price_box flex flex_col">

            <h4>PRICE DETAILS</h4>

            <hr className="line_space" />

            <div className="price_menu flex flex_justify_between">
                <span className="price_name">Price (2 items)</span>
                <span className="price_amount">₹4,999</span>
            </div>
            <div className="price_menu flex flex_justify_between">
                <span className="price_name">Discount</span>
                <span className="price_amount">- ₹2,000</span>
            </div>
            <div className="price_menu flex flex_justify_between">
                <span className="price_name">Delivery Charges</span>
                <span className="price_amount">₹499</span>
            </div>

            <hr className="line_space" />

            <div className="price_menu flex flex_justify_between">
                <span className="price_name">Delivery Charges</span>
                <span className="price_amount">₹3,499</span>
            </div>

            <hr className="line_space" />

            <h5 className="line_space">You will save ₹1,499 on this order</h5>

            <button className="btn btn_secondary">PLACE ORDER</button>

        </div>
    );
}

export {PriceBox};