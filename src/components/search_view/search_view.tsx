import React from "react";
import Categories from "../categories/categories";
import { Grid } from "@radix-ui/themes";
import Item from "../item/item";

const SearchView = () => {
  return (
    <>
      <Categories />
      <Grid columns="4" gap="4" width="auto">
        {[
          1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5,
          6,
        ].map((e, i) => (
          <Item element={"/image.png"} key={i} viewTrash={false} />
        ))}
      </Grid>
    </>
  );
};

export default SearchView;
