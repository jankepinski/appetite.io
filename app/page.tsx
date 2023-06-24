"use client";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import "app/page.css";
import RecipeContainer from "@/components/RecipeContainer";
import IngredientsContainer from "@/components/IngredientsContainer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface Ingredient {
  content: string;
  uuid: string;
}

export default function Page() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [recipe, setRecipe] = useState();
  const [pending, setPending] = useState(false);

  return (
    <div>
      <div className="app.container">
        <ThemeProvider theme={darkTheme}>
          <Box display="flex" sx={{ justifyContent: "space-evenly" }}>
            <IngredientsContainer
              ingredients={ingredients}
              setIngredients={setIngredients}
              setRecipe={setRecipe}
              setPending={setPending}
            />
            <RecipeContainer recipe={recipe} pending={pending} />
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}
