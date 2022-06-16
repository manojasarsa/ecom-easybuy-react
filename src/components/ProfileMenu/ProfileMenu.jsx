import "./profilemenu.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";

const ProfileMenu = () => {

    const { state, logout, customer } = useAuth();

    return (
        <div className="profile_box profile_menu flex_col">
            <div className="profile_options">
                <ul className="menu flex flex_col flex_justify_center flex_align_start">
                    <div className="flex flex_row flex_justify_around flex_align_center">
                        {state.isAuth ? <h3>Hello <span className="userName"> {customer.fname} </span> </h3> : <p>New Customer?</p> }
                        {state.isAuth || <Link className="btn btn_secondary_outline user_select" to="/signup">SignUp</Link>}
                    </div>
                    <Link className="menu_link" to="/user/profile">
                        <li className="profile_content user_select">Your Profile</li>
                    </Link>
                    <Link className="menu_link" to="/user/orders">
                        <li className="profile_content user_select">Order Summary</li>
                    </Link>
                    <Link className="menu_link" to="/checkout">
                        <li className="profile_content user_select">Checkout</li>
                    </Link>
                    <Link className="menu_link" to="/user/address">
                        <li className="profile_content user_select">Address Management</li>
                    </Link>
                    {state.isAuth ? <Link className="menu_link" to="/logout">
                        <li onClick={logout} className="profile_content user_select">Logout</li>
                    </Link>
                    : <Link className="menu_link" to="/login">
                        <li className="profile_content user_select">Login</li>
                    </Link>}
                </ul>
            </div>
        </div>
    );
}

export {ProfileMenu};