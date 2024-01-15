import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
const ArthaApplyButton = styled(Button)({
  background: "rgb(255, 115, 0)",
  color: "white",
  boxShadow: "none",
  width: "100px",
  height: "35px",
  textTransform: "capitalize",
  borderRadius: "40px",
  margin: "0px 3px",
  fontWeight: "700",
  "&:hover": {
    boxShadow: "none !important",
    background: "#FF8000",
  },
});

export default ArthaApplyButton;
