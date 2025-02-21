import React from "react";
import Categories from "../categories/categories";
import ItemList from "../item_list/item_list";

const SearchView = () => {
  return (
    <div className="w-3/4 mx-auto max-w-screen-lg">
      <Categories />
      <ItemList />
    </div>
  );
};

export default SearchView;
