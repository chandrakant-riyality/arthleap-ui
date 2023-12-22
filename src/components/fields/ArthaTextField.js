import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";

const ArthaTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    fontSize: "12px",
  },
  "& .MuiInputBase-input": {
    "&::placeholder": {
      fontSize: "18px",
    },
  },
  "& .MuiInputLabel-root": {
    fontSize: "14px",
  },
}));

export default ArthaTextField;
