import "./profile.css";
import { Header } from "../../components";
import { Link } from "react-router-dom";
import { useOrder } from "../../contexts/orderContext";
import { OrderCard } from "../../components/OrderCard/OrderCard";

const UserOrders = () => {

    const { orderState: { orders } } = useOrder();

    return (
        <div className="main_profile_wrapper flex">
            <Header />

            <div className="user_profile_main flex flex_col">

                <div className="details_box">
                    <h2 className="account_head">User Profile</h2>

                    <div className="profile_container flex">

                        <div className="quick_links">

                            <ul className="menu flex flex_col flex_justify_center flex_align_start">
                                <Link className="menu_link" to="/user/profile">
                                    <li className="profile_navigate">Profile</li>
                                </Link>
                                <Link className="menu_link" to="/user/address">
                                    <li className="profile_navigate">Address Management</li>
                                </Link>
                                <Link className="menu_link" to="/user/orders">
                                    <li className="profile_navigate">Order Summary</li>
                                </Link>
                            </ul>

                        </div>

                        <div className="profile_edit flex flex_col">

                            <h2 className="lines">My Orders</h2>

                            {!orders.length && <h4>No Orders Available!</h4>}

                            {orders.map((order) =>
                                <OrderCard key={order._id} order={order} />
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { UserOrders };