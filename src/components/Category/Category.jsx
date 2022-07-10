import "./category.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../contexts";

const Category = () => {

    const { dispatch } = useFilter();

    return (
        <nav className="main_nav flex flex_col flex_align_center">

            <h1 className="hero_title">Featured Categories</h1>

            <div className="main_nav category_margin flex flex_align_center">

                <Link onClick={() => dispatch({ type: "MEN" })}
                    className="nav_item flex flex_col flex_align_center" to="/productlist"><span className="img_title">Men</span>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14296056/2021/10/12/a66ee025-11d0-4560-be15-db24f6aad9f01634019104762-WROGN-Men-Jackets-2641634019103771-1.jpg" alt="Men" className="img_responsive" />
                </Link>

                <Link onClick={() => dispatch({ type: "WOMEN" })}
                    className="nav_item flex flex_col flex_align_center" to="/productlist"><span className="img_title">Women</span>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13601542/2021/4/28/92ac59d7-1c94-4fa9-8a84-bfaacc3c414e1619586566085TshirtsMetronautMenTshirtsRoadsterMenTshirtsRoadsterMenTopsR1.jpg" alt="Women" className="img_responsive" />
                </Link>

                <Link onClick={() => dispatch({ type: "BOYS" })}
                    className="nav_item flex flex_col flex_align_center" to="/productlist"><span className="img_title">Boys</span>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17124260/2022/2/10/5cad0fa3-8223-4707-bb1f-eb72b1360ad716445016680612-packjerseytops1.jpg" alt="Boys" className="img_responsive" />
                </Link>

                <Link onClick={() => dispatch({ type: "GIRLS" })}
                    className="nav_item flex flex_col flex_align_center" to="/productlist"><span className="img_title">Girls</span>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18084562/2022/4/29/3962f30a-7712-4b75-ae02-23d5e26fd05d1651202490622Cottonjerseycroppedtop1.jpg" alt="Girls" className="img_responsive" />
                </Link>

            </div>
            <h1 className="hero_title">Explore Products</h1>
        </nav>
    );
}

export { Category };