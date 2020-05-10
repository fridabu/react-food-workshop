import React from "react";
import dishes from "./data";

const CategoryFilter = props => {
    const categoryArray = Array.from(new Set(dishes.map(item => item.category)));
    categoryArray.push('All');
    return (
        <div>
            <h1>Burger Place</h1>
            <h2>Filters</h2>
            <form>
                <fieldset>
                    <legend>Category</legend>
                    {categoryArray.map(category => (
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                onChange={props.handleChange}
                            />{category}
                      </label>
                    ))}

                </fieldset>
            </form>
        </div>
    );
}

export default CategoryFilter;