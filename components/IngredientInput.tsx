import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function IngredientInput(props) {
  const [ingredient, setIngredient] = useState("");

  return (
    <TextField
      label="Enter ingredient"
      variant="outlined"
      fullWidth
      value={ingredient}
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
    />
  );
}
