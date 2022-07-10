import "./herobanner.css";
import { Link } from "react-router-dom";

const HeroBanner = () => {
    return (
        <section className="main_section flex flex_justify_between flex_align_center">

            <article className="new_arrivals flex">
                <div className="background">
                    <img
                        src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17268416/2022/2/24/82b027d2-d27d-4dd7-ba7f-a462fd2f200e1645695087696CottonjerseyT-shirt1.jpg"
                        alt=""
                        className="img_responsive adjust_img"
                    />
                </div>

                <div className="content flex flex_col">
                    <h2 className="tag_heading">NEW ARRIVALS</h2>
                    <h2> <Link className="btn btn_primary" to="/productlist">Add to Bag</Link></h2>
                </div>

            </article>

            <article className="new_arrivals flex">
                <div className="background">
                    <img
                        src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16491544/2021/12/13/9edb8584-76db-4684-b11d-58cda908666f1639371642646WoodsWomenBlackFloralLeatherWaterResistantBikerJacket1.jpg"
                        alt=""
                        className="img_responsive adjust_img"
                    />
                </div>

                <div className="content flex flex_col">

                    <h2 className="tag_heading">TRENDING</h2>
                    <h2> <Link className="btn btn_primary" to="/productlist">Shop Now</Link> </h2>
                </div>
            </article>
        </section>
    );
}

export { HeroBanner };