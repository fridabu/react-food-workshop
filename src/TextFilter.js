import React from "react";

const TextFilter = props => {

    return (
        <div>
          <form>
            <fieldset>
              <legend>Free text</legend>
              <div>
                <input
                  type="text"
                  id="free_text"
                  name="volume">
                </input>
                <button onClick={(event) =>{event.preventDefault(); return props.handleChangeText}}>Search</button>
              </div>
  
            </fieldset>
          </form>
        </div>
    );
  }
  
  export default TextFilter;
  