import "./profile.css";
import { Header } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

const UserOrders = () => {

    const { customer: {fname, lname}, logout } = useAuth();

    const navigate = useNavigate();

    return (
        <div className="main_profile_wrapper flex">
            <Header />

            <div className="user_profile_main flex flex_col">

                <div className="details_box">
                    <h2>Account</h2>
                    <h4 className="lines">{fname} {lname}</h4>

                    <div className="profile_container flex flex_row flex_justify_center flex_align_center">

                        <div className="quick_links">

                            <ul className="menu flex flex_col flex_justify_center flex_align_start">
                                <Link className="menu_link" to="/user/profile">
                                    <li className="profile_option">Profile</li>
                                </Link>
                                <Link className="menu_link" to="/user/address">
                                    <li className="profile_option">Address Management</li>
                                </Link>
                                <Link className="menu_link" to="/user/orders">
                                    <li className="profile_option">Order Summary</li>
                                </Link>
                            </ul>

                        </div>

                        {/* <div className="profile_edit flex flex_col flex_justify_center flex_align_center">

                            <h2 className="lines">Profile Details</h2>

                            <ul className="edit_list flex flex_col flex_justify_center flex_align_start">

                                <li className="profile_details flex flex_row ">
                                    <span className="profile_title">Name -</span>
                                    <span className="title_text">{fname} {lname}</span>
                                </li>
                                
                                <li className="profile_details flex flex_row flex_justify_between">
                                    <span className="profile_title">Email ID -</span>
                                    <span className="title_text">manojasarsa@xyz.com</span>
                                </li>
                                <li className="profile_details profile_logout_btn flex flex_justify_center">
                                    <button 
                                        className="btn btn_secondary_outline"
                                        onClick={() => {
                                            logout();
                                            navigate("/logout");
                                        }}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export { UserOrders };