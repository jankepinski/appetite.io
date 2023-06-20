import React from "react";

export default function SubmitButton(props) {
  const getRecipe = async () => {
    const reqBody = {
      ingredients: props.ingredients.map((ing) => ing.content),
    };

    const request = new Request("/api/chat", {
      method: "POST",
      body: JSON.stringify(reqBody),
    });
    let resp = await fetch(request).then((response) => response.json());
    props.callbacks.setRecipe(resp.message);
  };

  return <button onClick={getRecipe}>Get The Recipe</button>;
}
