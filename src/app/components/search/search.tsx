"use client";
import { Select, TextField } from "@radix-ui/themes";
import { Search as SearchIcon } from "lucide-react";

import React from "react";

const Search = () => {
  return (
    <div className="grid grid-rows-1 items-center justify-items-center m-4 ">
      <TextField.Root
        radius="full"
        placeholder="Searchgames..."
        className="border-pink-400 border-2"
      >
        <TextField.Slot>
          <SearchIcon height="14" width="26" />
        </TextField.Slot>
      </TextField.Root>

      {false && (
        <Select.Root defaultValue="apple">
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <Select.Item value="orange">Orange</Select.Item>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="grape" disabled>
                Grape
              </Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.Label>Vegetables</Select.Label>
              <Select.Item value="carrot">Carrot</Select.Item>
              <Select.Item value="potato">Potato</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      )}
    </div>
  );
};

export default Search;
