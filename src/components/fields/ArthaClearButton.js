import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ArthaClearButton = styled(Button)({
  background: "white",
  color: "black",
  boxShadow: "none",
  width: "200px",
  textTransform: "capitalize",
  height: "45px",
  borderRadius: "40px",
  fontWeight: "800",
  margin: "0px 3px",
  border: "1px solid rgb(228 228 228) !important",

  "&:hover": {
    color: "black",
    background: "white",
  },
});

export default ArthaClearButton;
