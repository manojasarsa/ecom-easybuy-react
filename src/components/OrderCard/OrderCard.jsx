import { Link } from "react-router-dom";
import "./ordercard.css";

const OrderCard = ({ order }) => {

    const { orderedAt, orderId, amountPaid, deliveryAddress, orderedProducts } = order;

    return (
        <div className="order_container">
            <header className="order_heading">Order Confirmed</header>

            <div className="order_details flex flex_col">
                <span>{orderedAt}</span>
                <span>OrderID {orderId}</span>
                <span>Total:₹ {amountPaid}</span>
            </div>

            <div className="delivery_details">
                <h3>Delivery Address:</h3>
                <address className="flex flex_col address_label">
                    <h4>{deliveryAddress.name}</h4>
                    <span>{deliveryAddress.street}</span>
                    <span>{deliveryAddress.city}</span>
                    <span>{deliveryAddress.country}</span>
                    <span>{deliveryAddress.zipCode}</span>
                    <span>{deliveryAddress.mobile}</span>
                </address>
            </div>

            {orderedProducts.map(({ id, _id, image, title, description, qty }) => (
                <Link key={_id} to={`/productlist/${id}`}>
                    <div className="card_image flex">
                        <div className="card_vertical">
                            <div className="card_vertical_info flex flex_col flex_justify_start">

                                <img className="img_responsive adjust_image" src={image} alt={title} />

                                <p className="card_text left_space">{title}</p>
                                <p className="card_subtext left_space overflow_desc">{description}</p>
                                <p className="card_text left_space">qty: {qty}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
};

export { OrderCard };