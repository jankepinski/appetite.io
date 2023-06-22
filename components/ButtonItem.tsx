import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonItem = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#262B32" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  transition: "0.2s",
  ":hover": { transform: "scale(1.01)" },
}));

export default ButtonItem;
