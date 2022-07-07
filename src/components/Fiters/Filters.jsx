import "./filters.css";
import { useFilter } from "../../contexts";

const Filters = () => {

    const { state, dispatch } = useFilter();
    const { men, women, boys, girls } = state.categories;

    return (
        <aside className="filter_container flex flex_col">
            <div className="flex flex_row flex_justify_between filter_spaces">
                <h3 className="filter_headings">FILTERS</h3>
                <h6 className="filter_clearAll" onClick={() => dispatch({ type: "CLEAR" })} > CLEAR ALL </h6>
            </div>
            <div className="filter_category  flex flex_col">
                <h3 className="filter_sub_headings">CATEGORY</h3>
                <div className="inp_checkbox flex flex_justify_start flex_align_center">
                    <label>
                        <input className="inp_checkbox"
                        name="MEN"
                        type="checkbox"
                        checked={men}
                        onChange={() => dispatch({ type: "MEN" })}
                        />
                        <span className="checkbox_notify">Men Clothing</span>
                    </label>
                </div>
                <div className="inp_checkbox flex flex_justify_start flex_align_center">
                    <label>
                        <input className="inp_checkbox"
                        onChange={() => dispatch({ type: "WOMEN" })}
                        name="WOMEN"
                        type="checkbox"
                        checked={women}
                        />
                        <span className="checkbox_notify">Women Clothing</span>
                    </label>
                </div>
                <div className="inp_checkbox flex flex_justify_start flex_align_center">
                    <label>
                        <input className="inp_checkbox"
                        onChange={() => dispatch({ type: "BOYS" })}
                        name="BOYS"
                        type="checkbox"
                        checked={boys}
                        />
                        <span className="checkbox_notify">Boys Clothing</span>
                    </label>
                </div>
                <div className="inp_checkbox flex flex_justify_start flex_align_center">
                    <label >
                        <input className="inp_checkbox"
                        onChange={() => dispatch({ type: "GIRLS" })}
                        name="GIRLS"
                        type="checkbox"
                        checked={girls}
                        />
                        <span className="checkbox_notify">Girls Clothing</span>
                    </label>
                </div>
            </div>
            <div className="filter_price flex flex_col filter_spaces">
                <h3 className="filter_sub_headings">PRICE</h3>
                <div className="flex flex_row flex_justify_between">
                    <h3 className="filter_headings">0</h3>
                    
                    <h3 className="filter_headings">6000</h3>
                </div>

                <label className="range">
                    <input className="input_range" type="range" min="0" max="6000" step="1000" value={state.rangeValue} onChange={ event => dispatch({ type: "PRICE_RANGE", payload: event })}
                    /> 
                </label>

                <div className="flex flex_col flex_align_end">                    
                    <h3 className="filter_headings">{state.rangeValue}</h3>             
                </div>
            </div>
            <div className="filter_sortby flex flex_col filter_spaces">
                <h3 className="filter_sub_headings">SORT BY</h3>
                <form className="rating_options flex flex_col">
                    <label>
                        <input className="filter_margin" onChange={()=>
                        dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
                        }
                        type="radio"
                        name="sortByFilter"
                        checked={state.sortBy === "LOW_TO_HIGH"}
                        />
                        <span>Low to High</span>
                    </label>
                    <label>
                        <input className="filter_margin" onChange={()=>
                        dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
                        }
                        type="radio"
                        name="sortByFilter"
                        checked={state.sortBy === "HIGH_TO_LOW"}
                        />
                        <span>High to Low</span>
                    </label>
                </form>
            </div>
            <div className="filter_rating flex flex_col filter_spaces">
                <h3 className="filter_sub_headings">RATING</h3>
                <form className="rating_options flex flex_col">
                    <label>
                        <input className="filter_margin" type="radio" name="rating" value="4 Stars & above" 
                        checked={state.rating === "4 Stars & above"}
                        onChange={() => dispatch({type: "RATING", payload: "4 Stars & above" })}/> 4 Stars & above
                    </label>
                    <label>
                        <input className="filter_margin" type="radio" name="rating" value="3 Stars & above" 
                        checked={state.rating === "3 Stars & above"}
                        onChange={() => dispatch({type: "RATING", payload: "3 Stars & above" })}/> 3 Stars & above
                    </label>
                    <label>
                        <input className="filter_margin" type="radio" name="rating" value="2 Stars & above" 
                        checked={state.rating === "2 Stars & above"}
                        onChange={() => dispatch({type: "RATING", payload: "2 Stars & above" })}/> 2 Stars & above
                    </label>
                    <label>
                        <input className="filter_margin" type="radio" name="rating" value="1 Stars & above" 
                        checked={state.rating === "1 Stars & above"}
                        onChange={() => dispatch({type: "RATING", payload: "1 Stars & above" })}/> 1 Stars & above
                    </label>
                </form>
            </div>
            <div className="filter_category  flex flex_col">
                <h3 className="filter_sub_headings">OTHER FILTERS</h3>
                <div className="inp_checkbox flex flex_justify_start flex_align_center">             
                    <label>
                        <input className="inp_checkbox"
                        onChange={() => dispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
                        name="INCLUDE_OUT_OF_STOCK"
                        type="checkbox"
                        checked={state.showInventory}
                        />
                        <span className="checkbox_notify">Include Out of Stock</span>
                    </label>
                </div> 
                <div className="inp_checkbox flex flex_justify_start flex_align_center">               
                    <label>
                        <input className="inp_checkbox"
                        onChange={() => dispatch({ type: "FAST_DELIVERY" })}
                        name="FAST_DELIVERY"
                        type="checkbox"
                        checked={state.fastDelivery}
                        />
                        <span className="checkbox_notify">Fast Delivery</span>
                    </label>
                </div>
            </div>
        </aside>
    );
}

export {Filters};