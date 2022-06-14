import "./profile.css";
import { Header } from "../../components";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";

const Profile = () => {

    const { customer: {fname, lname} } = useAuth();

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
                                <a className="menu_link" href="/">
                                    <li className="profile_option">Home</li>
                                </a>
                                <a className="menu_link" href="/">
                                    <li className="profile_option">Order Summary</li>
                                </a>
                                <a className="menu_link" href="/">
                                    <li className="profile_option">Address Management</li>
                                </a>
                                <Link className="menu_link" to="/logout">
                                    <li className="profile_option">Logout</li>
                                </Link>
                            </ul>

                        </div>

                        <div className="profile_edit flex flex_col flex_justify_center flex_align_center">

                            <h2 className="lines">Profile Details</h2>

                            <ul className="edit_list flex flex_col flex_justify_center flex_align_start">

                                <li className="profile_details flex flex_row ">
                                    <span className="profile_title">Full Name -</span>
                                    <span className="title_text">{fname} {lname}</span>
                                </li>
                                <li className="profile_details flex flex_row ">
                                    <span className="profile_title">Mobile Number -</span>
                                    <span className="title_text">982899999</span>
                                </li>
                                <li className="profile_details flex flex_row flex_justify_between">
                                    <span className="profile_title">Email ID -</span>
                                    <span className="title_text">manojasarsa@xyz.com</span>
                                </li>
                                <li className="profile_details flex flex_row flex_justify_between flex_align_start">
                                    <span className="profile_title">Gender -</span>
                                    <span className="title_text">MALE</span>
                                </li>
                                <li className="profile_details flex flex_row flex_justify_between">
                                    <span className="profile_title">Date of Birth -</span>
                                    <span className="title_text">- not added -</span>
                                </li>
                                <li className="profile_details flex flex_row flex_justify_between">
                                    <span className="profile_title">Location -</span>
                                    <span className="title_text">- not added -</span>
                                </li>

                                <a className="btn btn_secondary" href="/">Edit</a>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export { Profile };