import "./auth.css";
import { Header } from "../../components";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <Header />
            <div className="input_container flex flex_col" id="auth_container">
                <form className="input_field flex flex_col">
                    <h2 className="input_heading">Signup</h2>
                    <label className="input_label">Email address</label>
                    <input className="input_box" type="email" placeholder="manoj@neog.camp" required />
                    <label className="input_label">Create Password</label>
                    <input className="input_box" type="name" placeholder="***********" required />
                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <input type="checkbox" className="input_checkbox" /> 
                        <p className="checkbox_notify">I accept all Terms & Conditions</p>
                    </div>
                    <Link className="route_link btn btn_secondary" to="/signup">Create New Account</Link>
                    <p className="input_subheading"><Link id="input_subheading" to="/login">Already have an account </Link></p>
                </form>
            </div>
        </>
    );
}

export {SignUp};