import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
const ArthaContinueButton = styled(Button)({
  background: "rgb(255, 115, 0)",
  color: "white",
  boxShadow: "none",
  width: "200px",
  height: "45px",
  textTransform: "capitalize",
  borderRadius: "40px",
  margin: "0px 3px",
  fontWeight: "700",
  "&:hover": {
    background: "#FF8000",
  },
});

export default ArthaContinueButton;
