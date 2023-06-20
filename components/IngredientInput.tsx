import React from "react";
import { useState } from "react";

export default function IngredientInput(props) {
  const [ingredient, setIngredient] = useState("");

  return (
    <input
      value={ingredient}
      type="text"
      onChange={(event) => setIngredient(event.target.value)}
      onKeyDown={(event) =>
        event.key === "Enter"
          ? (() => {
              props.setIngredients([
                ...props.ingredients,
                { content: ingredient, uuid: crypto.randomUUID() },
              ]);
              setIngredient("");
            })()
          : null
      }
    ></input>
  );
}
