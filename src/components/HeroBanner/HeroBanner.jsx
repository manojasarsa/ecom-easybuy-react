import "./herobanner.css";

const HeroBanner = () => {
    return (
        <section className="main_section flex flex_justify_between flex_align_center">

            <article className="new_arrivals">
                <div className="background">
                    <img src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/male.jpg" alt="" className="img_responsive adjust_img" />
                </div>
                <div className="content flex_col flex_justify_center flex_align_start">
                    <h2><a className="btn btn_primary_outline" href="/cart-and-wishlist/cart.html">Add to Bag</a></h2>
                </div>
                <h2 className="tag_heading">NEW ARRIVALS</h2>

            </article>

            <article className="new_arrivals">
                <div className="background">
                    <img src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/male.jpg" alt="" className="img_responsive adjust_img" />
                </div>
                <div className="content flex_col flex_justify_center flex_align_start">
                    <h2><a className="btn btn_primary_outline" href="/product-list/product-list.html">Shop Now</a></h2>
                </div>
                <h2 className="tag_heading">TRENDING</h2>
            </article>
        </section>
    );
}

export {HeroBanner};