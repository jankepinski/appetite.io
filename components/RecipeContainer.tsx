import { Box, Stack, CircularProgress } from "@mui/material";
import TextItem from "./TextItem";

const ContainerBoxStyle = {
  paddingX: "1vw",
  paddingY: "1vh",
  width: "50%",
};

const InnerContainerBoxStyle = {
  paddingX: "1vw",
  paddingY: "1vh",
  width: "45%",
};

const NoRecipeBoxStyle = {
  display: "flex",
  paddingX: "1vw",
  paddingY: "1vh",
  width: "50%",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
};

export default function RecipeContainer(props) {
  return props.pending === false ? (
    props.recipe !== undefined ? (
      <Box sx={ContainerBoxStyle}>
        <Box display="flex" sx={{ justifyContent: "space-evenly" }}>
          <Box sx={InnerContainerBoxStyle}>
            <Stack spacing={2}>
              <TextItem elevation={12}>{props.recipe.name}</TextItem>
              {props.recipe.ingredients.map((ing) => (
                <TextItem key={crypto.randomUUID()} elevation={2}>
                  {ing}
                </TextItem>
              ))}
            </Stack>
          </Box>
          <Box sx={InnerContainerBoxStyle}>
            <Stack spacing={2}>
              <TextItem elevation={12}>Instructions</TextItem>
              {props.recipe.instructions.map((step, index) => (
                <TextItem key={crypto.randomUUID()} elevation={2}>
                  {index + 1}: {step}
                </TextItem>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    ) : (
      <Box sx={NoRecipeBoxStyle}></Box>
    )
  ) : (
    <Box sx={NoRecipeBoxStyle}>
      <CircularProgress />
    </Box>
  );
}
