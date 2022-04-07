import "./category.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../contexts";

const Category = () => {

    const { dispatch } = useFilter();

    return (
        <nav className="main_nav flex flex_align_center">

            <Link onClick={() => dispatch({ type: "MEN" })}
                className="nav_item flex flex_col flex_align_center" to="/productlist">Men
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14632916/2021/7/5/58641bdf-509e-486c-b5b6-04d2b7da57341625470492157-US-Polo-Assn-Men-Tshirts-3211625470491687-1.jpg" alt="Men" className="img_responsive adjust_img" />
            </Link>

            <Link onClick={() => dispatch({ type: "WOMEN" })}
                className="nav_item flex flex_col flex_align_center" to="/productlist">Women
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13601542/2021/4/28/92ac59d7-1c94-4fa9-8a84-bfaacc3c414e1619586566085TshirtsMetronautMenTshirtsRoadsterMenTshirtsRoadsterMenTopsR1.jpg" alt="Women" className="img_responsive adjust_img" />
            </Link>

            <Link onClick={() => dispatch({ type: "BOYS" })}
                className="nav_item flex flex_col flex_align_center" to="/productlist">Boys
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17268416/2022/2/24/82b027d2-d27d-4dd7-ba7f-a462fd2f200e1645695087696CottonjerseyT-shirt1.jpg" alt="Boys" className="img_responsive adjust_img" />
            </Link>

            <Link onClick={() => dispatch({ type: "GIRLS" })}
                className="nav_item flex flex_col flex_align_center" to="/productlist">Girls
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17464922/2022/3/10/c6a73cb2-0ba4-4fdd-8fb5-c41d08fcd7b41646917282995PrintedT-shirt1.jpg" alt="Girls" className="img_responsive adjust_img" />
            </Link>
        </nav>
    );
}

export {Category};