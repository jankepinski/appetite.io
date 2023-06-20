import React from "react";

export default function IngredientsList(props) {
  return (
    <div>
      {props.ingredients.map((i) => (
        <div
          key={i.uuid}
          onClick={() => {
            props.callbacks.setIngredients(
              [...props.ingredients].filter((ing) => ing.uuid !== i.uuid)
            );
          }}
        >
          {i.content}
        </div>
      ))}
    </div>
  );
}
