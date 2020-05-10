import React from "react";
import dishes from "./data";

// const categories = [
//   "all",
//   "burger",
//   "hot dog",
//   "sandwich",
//   "fries",
//   "topping",
//   "drink",
//   "extra",
// ];

const DishList = props =>{
  return (
      <section className="dishes">
        <h2>Dishes</h2>
        <ul className="grid">
          {dishes.filter(dish => dish.price >= props.minprice && dish.price <= props.maxprice).map(dish => (
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