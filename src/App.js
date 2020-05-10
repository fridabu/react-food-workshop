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

function App() {
  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <h2>Filters</h2>
        <form>Inputs go here</form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        <ul className="grid">
          {dishes.map(dish => (
            <li className="card" key={dish.id}>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <h5>{dish.price} £</h5>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
