import "./category.css";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <nav className="main_nav flex flex_align_center">
            <Link className="nav_item flex flex_col flex_align_center" to="/productlist">Men
                <img src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/male.jpg" alt="Men" className="img_responsive adjust_img" />
            </Link>

            <Link className="nav_item flex flex_col flex_align_center" to="/productlist">Women
                <img src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/male.jpg" alt="Women" className="img_responsive adjust_img" />
            </Link>

            <Link className="nav_item flex flex_col flex_align_center" to="/productlist">Kids
                <img src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/male.jpg" alt="Kids" className="img_responsive adjust_img" />
            </Link>

            <Link className="nav_item flex flex_col flex_align_center" to="/productlist">Best Sellers
                <img src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/male.jpg" alt="Best Sellers" className="img_responsive adjust_img" />
            </Link>
        </nav>
    );
}

export {Category};