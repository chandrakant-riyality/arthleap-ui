import { FormControl } from "@mui/material";
import { styled } from "@mui/system";

const ArthaFormControl = styled(FormControl)({
  width: "100%", // Make the control full-width
  "& .MuiInputBase-root": {
    fontSize: "13px", // Adjust the font size as needed
  },
});

export default ArthaFormControl;
