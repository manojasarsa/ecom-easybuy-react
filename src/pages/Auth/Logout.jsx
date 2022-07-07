import "./auth.css";
import { Header } from "../../components";
import { Link } from "react-router-dom";

const Logout = () => {
    return (
        <>
            <Header />
            <main className="logout_container flex flex_align_center flex_justify_center">
                <div className="logout_box flex flex_col flex_justify_center flex_align_center">
                    <i className="fas fa-circle-check icon fa-2x"></i>
                    <p className="logout_text">You have been logged out successfully!</p>
                    <Link className="link" to = "/" >Back to Home</Link>
                </div>
            </main>
        </>
    );
}

export {Logout};