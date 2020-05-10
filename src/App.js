import React from "react";
import DishList from "./DishList";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";

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
  const [minprice, setminprice] = React.useState("0");
  const [maxprice, setmaxprice] = React.useState("9");
  const [category, setcategory] = React.useState("All");
  const handleChangeMin = event => setminprice(event.target.value);
  const handleChangeMax = event => setmaxprice(event.target.value);
  const handleChangeCategory = event => setcategory(event.target.value);

  React.useEffect(() => {
    document.title = `${minprice} : ${maxprice}`;
  });

  return (
    <main>
      <section className="filters">
      <PriceFilter handleChangeMax={handleChangeMax} handleChangeMin={handleChangeMin} />
      <CategoryFilter handleChange={handleChangeCategory }/>
      </section>
      <DishList minprice={minprice} maxprice={maxprice} category={category}/>
    </main>
  );
}

export default App;
