import { Box, Stack } from "@mui/material";
import ButtonItem from "./ButtonItem";
import SubmitButton from "./SubmitButton";
import IngredientInput from "./IngredientInput";

export default function IngredientsContainer(props) {
  return (
    <Box
      sx={{
        paddingX: "1vw",
        paddingY: "1vh",
        width: "50%",
      }}
    >
      <Stack spacing={2}>
        <Box display="flex" alignItems="center" sx={{ gap: "1vw" }}>
          <IngredientInput
            ingredients={props.ingredients}
            setIngredients={props.setIngredients}
          />
          <SubmitButton
            ingredients={props.ingredients}
            setRecipe={props.setRecipe}
            setPending={props.setPending}
          />
        </Box>
        {props.ingredients.map((i) => (
          <ButtonItem
            key={i.uuid}
            onClick={() => {
              props.setIngredients(
                [...props.ingredients].filter((ing) => ing.uuid !== i.uuid)
              );
            }}
          >
            {i.content}
          </ButtonItem>
        ))}
      </Stack>
    </Box>
  );
}
