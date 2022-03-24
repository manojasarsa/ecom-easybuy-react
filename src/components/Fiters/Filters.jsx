import "./filters.css";
import { useFilter } from "../../contexts/filterContext";

const Filters = () => {

    const { state, dispatch } = useFilter();
    const { men, women, kids, bestsellers } = state.categories;

    return (
        <aside className="filter_container flex flex_col">

            <div className="flex flex_row flex_justify_between filter_spaces">
                <h3 className="filter_headings">Filters</h3>
                <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
            </div>

            <div className="filter_price flex flex_col filter_spaces">
                <h3 className="filter_headings">Price</h3>
                <div className="flex flex_row flex_justify_between">
                    <h3 className="filter_headings">0</h3>
                    <h3 className="filter_headings">{state.rangeValue}</h3>
                    <h3 className="filter_headings">6000</h3>
                </div>
                
                <label>
                    <div className="range" style={{ margin: "2rem" }}>
                        <div className="sliderValue">
                            <span>{state.rangeValue}</span>
                        </div>
                        <div className="field">
                            {/* <div className="value left">0</div> */}
                            <input type="range" min="100" max="6000" value={state.rangeValue} onChange={(event)=>
                            dispatch({ type: "PRICE_RANGE", payload: event })
                            }
                            />
                            {/* <div className="value right">1000</div> */}
                        </div>
                    </div>
                </label>
            </div>

            <div className="filter_category  flex flex_col">
                <h3 className="filter_headings">Category</h3>
                <div className="inp_checkbox flex flex_justify_start flex_align_center">
                    <label>
                        <input className="input_checkbox"
                        
                        name="MEN"
                        type="checkbox"
                        checked={men}
                        onChange={() => dispatch({ type: "MEN" })}
                        />
                        <span className="checkbox_notify" style={{ userSelect: "none" }}>Men Clothing</span>
                    </label>
                </div>

                <div className="inp_checkbox flex flex_justify_start flex_align_center">
                    <label>
                        <input className="input_checkbox"
                        onChange={() => dispatch({ type: "WOMEN" })}
                        name="WOMEN"
                        type="checkbox"
                        checked={women}

                        />
                        <span className="checkbox_notify" style={{ userSelect: "none" }}>Women Clothing</span>
                    </label>
                </div>

                <div className="inp_checkbox flex flex_justify_start flex_align_center">
                    <label>
                        <input className="input_checkbox"
                        onChange={() => dispatch({ type: "KIDS" })}
                        name="KIDS"
                        type="checkbox"
                        checked={kids}

                        />
                        <span className="checkbox_notify" style={{ userSelect: "none" }}>Kids Clothing</span>
                    </label>
                </div>

                <div className="inp_checkbox flex flex_justify_start flex_align_center">
                    <label>
                        <input className="input_checkbox"
                        onChange={() => dispatch({ type: "BESTSELLERS" })}
                        name="BESTSELLERS"
                        type="checkbox"
                        checked={bestsellers}

                        />
                        <span className="checkbox_notify" style={{ userSelect: "none" }}>Best Sellers</span>
                    </label>
                </div>
            </div>

            <div className="filter_category  flex flex_col">
                <h3 className="filter_headings">Other Filters</h3>
                <div className="inp_checkbox flex flex_justify_start flex_align_center">             
                    <label>
                        <input className="input_checkbox"
                        onChange={() => dispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
                        name="INCLUDE_OUT_OF_STOCK"
                        type="checkbox"
                        checked={state.showInventory}
                        />
                        <span className="checkbox_notify" style={{ userSelect: "none" }}>Include Out of Stock</span>
                    </label>
                </div> 

                <div className="inp_checkbox flex flex_justify_start flex_align_center">               
                    <label>
                        <input className="input_checkbox"
                        onChange={() => dispatch({ type: "FAST_DELIVERY" })}
                        name="FAST_DELIVERY"
                        type="checkbox"
                        checked={state.fastDelivery}
                        />
                        <span className="checkbox_notify" style={{ userSelect: "none" }}>Fast Delivery</span>
                    </label>
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
                        <input onChange={()=>
                        dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
                        }
                        type="radio"
                        name="sortByFilter"
                        checked={state.sortBy === "LOW_TO_HIGH"}
                        />
                        <span style={{ userSelect: "none" }}>Low to High</span>
                    </label>
                    <label>
                        <input onChange={()=>
                        dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
                        }
                        type="radio"
                        name="sortByFilter"
                        checked={state.sortBy === "HIGH_TO_LOW"}
                        />
                        <span style={{ userSelect: "none" }}>High to Low</span>
                    </label>
                </form>
            </div>

        </aside>
    );
}

export {Filters};