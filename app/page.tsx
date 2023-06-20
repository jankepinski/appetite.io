"use client";
import { useState } from "react";
import SubmitButton from "@/components/SubmitButton";
import IngredientInput from "@/components/IngredientInput";
import IngredientsList from "@/components/IngredientsList";

interface Ingredient {
  content: string;
  uuid: string;
}

export default function Page() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [recipe, setRecipe] = useState("");

  return (
    <div>
      <IngredientInput
        ingredients={ingredients}
        callbacks={{ setIngredients: setIngredients }}
      />
      <SubmitButton
        ingredients={ingredients}
        callbacks={{ setRecipe: setRecipe }}
      />
      <IngredientsList
        ingredients={ingredients}
        callbacks={{ setIngredients: setIngredients }}
      />
      <div>Recipe: {recipe}</div>
    </div>
  );
}
