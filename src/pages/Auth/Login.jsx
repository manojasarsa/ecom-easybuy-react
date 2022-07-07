import "./auth.css";
import { Header } from "../../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts";
import { toastHandler } from "../../utils/toastHandler";

const Login = () => {

    const { login } = useAuth();

    const loginInputs = {
        email: "",
        password: ""
    }

    const [formInputs, setFormInputs] = useState(loginInputs);
    const [toastMsg, setToastMsg] = useState("");
    const [toastState, setToastState] = useState(false);
    const [showHide, setShowHide] = useState(false);

    const { email, password } = formInputs;

    const loginHandler = (e) => {
        e.preventDefault();
        login({ email, password, setToastMsg, setToastState });
        setToastMsg("Welcome Back!");
        toastHandler(setToastState);
    }

    const guestLoginHandler = (e) => {
        e.preventDefault();
        login({ email: "manojasarsa7611@gmail.com", password: "Manoj@8947", setToastMsg, setToastState });
        setToastMsg("Welcome Back!");
        toastHandler(setToastState);
    }

    return (
        <>
            <Header />

            <div className="input_container flex flex_col" id="auth_container">

                <form className="input_field flex flex_col">

                    <h2 className="input_heading">Login</h2>

                    <label className="input_label">Email address<span className="form_label">*</span>
                        <input
                            name="email"
                            value={email}
                            className="input_box"
                            type="email"
                            required={true}
                            onChange={(e) => setFormInputs({ ...formInputs, email: e.target.value })}
                        />

                    </label>

                    <label className="input_label">Password<span className="form_label">*</span>
                        <input
                            name="password"
                            value={password}
                            className="input_box"
                            type={showHide ? "text" : "password"}
                            required={true}
                            onChange={(e) => setFormInputs({ ...formInputs, password: e.target.value })}
                        />

                        <i className="fa-solid fa-eye show_hide_btn"
                            onClick={() => setShowHide((prev) => !prev)}>
                        </i>

                    </label>

                    <button className=" btn btn_secondary" onClick={(e) => loginHandler(e)} >Login</button>
                    <button className=" btn btn_secondary_outline" onClick={(e) => guestLoginHandler(e)} >Guest Login</button>

                    <p className="input_subheading"><Link id="input_subheading" to="/signup">Create New Account</Link> </p>

                </form>
            </div>

            {toastState && <div className="toast flex flex_justify_center flex_align_center toast_active_leading toast_position">
                <span> {toastMsg} </span>
            </div>}
        </>
    );
}

export { Login };