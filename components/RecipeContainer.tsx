import { Box, Stack, CircularProgress } from "@mui/material";
import TextItem from "./TextItem";

export default function RecipeContainer(props) {
  return props.recipe !== undefined ? (
    <Box
      sx={{
        paddingX: "1vw",
        paddingY: "1vh",
        width: "50%",
      }}
    >
      <Box display="flex" sx={{ justifyContent: "space-evenly" }}>
        <Box
          sx={{
            paddingX: "1vw",
            paddingY: "1vh",
            width: "45%",
          }}
        >
          <Stack spacing={2}>
            <TextItem elevation={12}>{props.recipe.name}</TextItem>
            {props.recipe.ingredients.map((ing) => (
              <TextItem key={crypto.randomUUID()} elevation={2}>
                {ing}
              </TextItem>
            ))}
          </Stack>
        </Box>
        <Box
          sx={{
            paddingX: "1vw",
            paddingY: "1vh",
            width: "45%",
          }}
        >
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
  ) : props.pending ? (
    <Box
      sx={{
        display: "flex",
        paddingX: "1vw",
        paddingY: "1vh",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        paddingX: "1vw",
        paddingY: "1vh",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    ></Box>
  );
}
