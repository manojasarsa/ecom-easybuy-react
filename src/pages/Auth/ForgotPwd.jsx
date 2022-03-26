import "./auth.css";
import { Header } from "../../components";
import { Link } from "react-router-dom";

const ForgotPwd = () => {
    return (
        <>
            <Header />
            <div class="input_container flex flex_col" id="auth_container">
                <form class="input_field flex flex_col">
                    <h2 class="input_heading">Trouble login in?</h2>
                    <label id="input_subheading">Enter your email and we'll send you a link to get back into your account.</label>
                    <input class="input_box" type="email" required />
                    <button class="btn btn_secondary">Send Login Link</button>
                    <p class="input_subheading">OR</p>
                    <p class="input_subheading"> <Link id="input_subheading" to="/signup">Create New Account</Link> </p>
                </form>
            </div>
        </>
    );
}

export {ForgotPwd};