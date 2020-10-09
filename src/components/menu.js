import React, { useEffect, useState } from "react";
import Product from "./product";

const Menu = ({ menu }) => {
  const [menuItems, setMenu] = useState(menu);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setCategories([
      "all",
      ...Array.from(new Set(menu.map(item => item.category))),
    ]);
  }, [menu]);
  console.log(menuItems);

  if (menuItems.length > 0) {
    return (
      <section className="menu ">
        <h2 className="text-center py-5 display-4">our menu</h2>
        <div className="col-10 mx-auto text-center">
          {categories.map((category, i) => (
            <button
              className="btn btn-yellow m-2"
              key={i}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="col-10 mx-auto my-4">
          <div className="row">
            {menuItems
              .filter(menu => {
                if (selectedCategory == "all") {
                  return menu;
                }
                return menu.category == selectedCategory;
              })
              .map(item => (
                <Product product={item} key={item.id} />
              ))}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="menu py-5">
      <div className="container">
        <h2 className="text-center">our menu</h2>
        <div className="row">
          <div className="col-10 col-6 mx-auto text-center text-capitalize">
            <h1>there are no items to display</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
