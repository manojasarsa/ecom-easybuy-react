import "./profile.css";
import {Header} from "../../components";
import {Link} from "react-router-dom";

const Profile = () => {
    return (
        <>
            <Header />

            <div className="user_profile_main flex flex_col">

            <h2>Account</h2>
            <h4 className="lines">Manoj Asarsa</h4>

            <div className="profile_container flex flex_row flex_justify_center flex_align_center">

                <div className="quick_links flex flex_col flex_justify_center flex_align_center">

                    <ul className="menu flex flex_col flex_justify_center flex_align_start">
                        <a className="menu_link" href="/">
                            <li className="profile_content">Overview</li>
                        </a>
                        <a className="menu_link" href="/">
                            <li className="profile_content">Order Summary</li>
                        </a>
                        <a className="menu_link" href="/">
                            <li className="profile_content">Apply Coupons</li>
                        </a>
                        <a className="menu_link" href="/">
                            <li className="profile_content">Address Management</li>
                        </a>
                        <Link className="menu_link" to="/forgotpwd">
                            <li className="profile_content">Forgot Password</li>
                        </Link>
                        <Link className="menu_link" to="/logout">
                            <li className="profile_content">Logout</li>
                        </Link>
                    </ul>

                </div>

                <div className="profile_edit flex flex_col flex_justify_center flex_align_center">

                    <h2 className="lines">Profile Details</h2>

                    <ul className="edit_list flex flex_col flex_justify_center flex_align_start">

                        <li className="profile_details flex flex_row ">
                            <span>Full Name</span>
                            <span>Manoj Asarsa</span>
                        </li>
                        <li className="profile_details flex flex_row ">
                            <span>Mobile Number</span>
                            <span>982899999</span>
                        </li>
                        <li className="profile_details flex flex_row flex_justify_between">
                            <span>Email ID</span>
                            <span>manojasarsa@xyz.com</span>
                        </li>
                        <li className="profile_details flex flex_row flex_justify_between flex_align_start">
                            <span>Gender</span>
                            <span>MALE</span>
                        </li>
                        <li className="profile_details flex flex_row flex_justify_between">
                            <span>Date of Birth</span>
                            <span>- not added -</span>
                        </li>
                        <li className="profile_details flex flex_row flex_justify_between">
                            <span>Location</span>
                            <span>- not added -</span>
                        </li>

                        <a className="btn btn_secondary" href="/">Edit</a>
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
}

export {Profile};