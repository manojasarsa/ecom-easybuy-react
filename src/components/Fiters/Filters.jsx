import "./filters.css";

const Filters = () => {
    return (
        <aside className="filter_container flex flex_col">

            <div className="flex flex_row flex_justify_between filter_spaces">
                <h3 className="filter_headings">Filters</h3>
                <a className="filter_clear" href="#">Clear</a>
            </div>

            <div className="filter_price flex flex_col filter_spaces">
                <h3 className="filter_headings">Price</h3>
                <div className="flex flex_row flex_justify_between">
                    <h3 className="filter_headings">10</h3>
                    <h3 className="filter_headings">50</h3>
                    <h3 className="filter_headings">100</h3>
                </div>
                <input type="range" className="slider" min="10" max="100"  step="10" />
            </div>

            <div className="filter_category  flex flex_col">
                <h3 className="filter_headings">Category</h3>
                <div className="inp_checkbox flex flex_justify_start flex_align_center">
                    <input type="checkbox" className="input_checkbox" />
                    <p className="checkbox_notify">Men Clothing</p>
                </div>
                <div className="inp_checkbox flex flex_justify_start flex_align_center">
                    <input type="checkbox" className="input_checkbox" />
                    <p className="checkbox_notify">Women Clothing</p>
                </div>
            </div>

            <div className="filter_rating flex flex_col filter_spaces">
                <h3 className="filter_headings">Rating</h3>
                <form className="rating_options flex flex_col">
                    <label>
                        <input type="radio" name="rating" value="4 Stars & above" /> 4 Stars & above
                    </label>
                    <label>
                        <input type="radio" name="rating" value="3 Stars & above" /> 3 Stars & above
                    </label>
                    <label>
                        <input type="radio" name="rating" value="2 Stars & above" /> 2 Stars & above
                    </label>
                    <label>
                        <input type="radio" name="rating" value="1 Stars & above" /> 1 Stars & above
                    </label>
                </form>
            </div>

            <div className="filter_sortby flex flex_col filter_spaces">
                <h3 className="filter_headings">Sort by</h3>
                <form className="rating_options flex flex_col">
                    <label>
                        <input type="radio" name="rating" value="Price - Low to High" /> Price - Low to High
                    </label>
                    <label>
                        <input type="radio" name="rating" value="Price - High to Low" /> Price - High to Low
                    </label>
                </form>
            </div>

        </aside>
    );
}

export {Filters};