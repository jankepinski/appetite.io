import React from "react";
import { Button } from "@mui/material";

export default function SubmitButton(props) {
  const getRecipe = async () => {
    const reqBody = {
      ingredients: props.ingredients.map((ing) => ing.content),
    };

    const request = new Request("/api/chat", {
      method: "POST",
      body: JSON.stringify(reqBody),
    });
    let resp = await fetch(request).then((response) => {
      props.setPending(false);
      return response.json();
    });
    props.setRecipe(resp.recipe);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        props.setPending(true);
        getRecipe();
      }}
      sx={{ textTransform: "capitalize" }}
    >
      Get Recipe
    </Button>
  );
}
