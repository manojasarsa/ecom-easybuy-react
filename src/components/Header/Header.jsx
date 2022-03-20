import "./header.css"

const Header = () => {
    return (
        <header className="main_header">
            <div className="navigation flex flex_justify_between flex_align_center" id="header_box">
                <div className="nav_left logo">
                    <a className="header_logo" href="/">easYbuY</a>
                    <p className="tagline">We Value Your Choices</p>
                </div>
                <div className="nav_center searchbar">
                    <input type="search" className="input input_search search" placeholder="Search for products, brands and more" />
                </div>
                <div className="nav_right flex flex_justify_between flex_align_center">

                    <a className="btn btn_primary" href="/auth/login.html">Login</a>

                    <a className="badge_container badge_icon">
                        <i className="fas fa-user-circle profile"></i>
                    </a>

                    <div className="profile_box profile_menu flex_col">
                        <div className="profile_options">
                            <ul className="menu flex flex_col flex_justify_center flex_align_start">
                                <div className="flex flex_row flex_justify_around flex_align_center">
                                    <p>New Customer?</p>
                                    <a className="btn btn_secondary" href="/auth/signup.html">Sign Up</a>
                                </div>
                                <a className="menu_link" href="/user-profile/user-profile.html" ><li className="profile_content">Your Profile</li> </a>
                                <a className="menu_link" href="#"><li className="profile_content">Order Summary</li> </a>
                                <a className="menu_link" href="#"><li className="profile_content">Apply Coupons</li> </a>
                                <a className="menu_link" href="#"><li className="profile_content">Checkout</li> </a>
                                <a className="menu_link" href="#"> <li className="profile_content">Address Management</li></a>
                                <a className="menu_link" href="/auth/forgotpwd.html" ><li className="profile_content">Forgot Password</li> </a>
                                <a className="menu_link" href="/auth/logout.html"><li className="profile_content">Logout</li> </a>
                            </ul>
                        </div>
                    </div>

                    <div className="badge_container badge_icon">
                        <a href="/cart-and-wishlist/wishlist.html">
                            <i className="fa-regular fa-heart"></i>
                            <span className="badge_icon_num badge_status flex flex_justify_center flex_align_center"> 3 </span>
                        </a>
                    </div>

                    <div className="badge_container badge_icon">
                        <a href="/cart-and-wishlist/cart.html">
                            <i className="fa fa-shopping-cart"></i>
                            <span className="badge_icon_num badge_status flex flex_justify_center flex_align_center"> 4 </span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export {Header};