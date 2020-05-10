import React from "react";
import dishes from "./data";

const DishList = props => {
    function filter(item) {
        if (props.category !== 'All') {
            if (item.category !== props.category) {
                return false;
            }
        }
        if (item.price >= props.minprice && item.price <= props.maxprice) {
            return true;
        } else {
            return false;
        }

    }
    return (
        <section className="dishes">
            <h2>Dishes</h2>
            <ul className="grid">
                {dishes.filter(dish => filter(dish)).map(dish => (
                    <li className="card" key={dish.id}>
                        <h3>{dish.name}</h3>
                        <p>{dish.description}</p>
                        <h5>{dish.price.toFixed(2)} £</h5>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default DishList;