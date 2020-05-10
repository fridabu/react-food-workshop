import React from "react";

const PriceFilter = props => {

    return (
        <div>
          <h1>Burger Place</h1>
          <h2>Filters</h2>
          <form>
            <fieldset>
              <legend>Price</legend>
              <div>
                <input
                  type="range"
                  id="min_price"
                  name="volume"
                  min="0"
                  max="9"
                  onChange={props.handleChangeMin}>
                </input>
                <label for="min_price">Min Price</label>
              </div>
  
              <div>
                <input
                  type="range"
                  id="max_price"
                  name="volume"
                  min="0"
                  max="9"
                  onChange={props.handleChangeMax}>
  
                </input>
                <label for="max_price">Max Price</label>
              </div>
            </fieldset>
          </form>
        </div>
    );
  }
  
  export default PriceFilter;
  