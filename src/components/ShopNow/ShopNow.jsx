import "./shopnow.css";
import { Link } from "react-router-dom";

const ShopNow = () => {
    return (
        <main className="main_main flex flex_col flex_justify_center flex_align_start">
            <h2>CELEBRATE THIS SUMMER</h2>
            <h2>30% OFF</h2>
            {/* <a className="btn btn_secondary">  SHOP NOW</a> */}
            <Link className="btn btn_secondary" to="/productlist">SHOP NOW</Link>
        </main>
    );
}

export {ShopNow};