import "./herobanner.css";
import { Link } from "react-router-dom";

const HeroBanner = () => {
    return (
        <section className="main_section flex flex_justify_between flex_align_center">

            <article className="new_arrivals">
                <div className="background">
                    <img src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/bmen.jpg" alt="" className="img_responsive adjust_img" />
                </div>
                <div className="content flex_col flex_justify_center flex_align_start">
                    <h2> <Link className="btn btn_primary_outline" to="/productlist">Add to Bag</Link></h2>
                </div>
                <h2 className="tag_heading">NEW ARRIVALS</h2>

            </article>

            <article className="new_arrivals">
                <div className="background">
                    <img src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/bwomen.jpg" alt="" className="img_responsive adjust_img" />
                </div>
                <div className="content flex_col flex_justify_center flex_align_start">
                    <h2> <Link className="btn btn_primary_outline" to="/productlist">Shop Now</Link> </h2>
                </div>
                <h2 className="tag_heading">TRENDING</h2>
            </article>
        </section>
    );
}

export { HeroBanner };