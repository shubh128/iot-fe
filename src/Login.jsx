import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";
export default function Login() {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClick = (event) => {
    event.preventDefault();

    const user = {
      ID: 7,
      Location: 2,
    };
    setCurrentUser(user);
    console.log("setuser");
    sessionStorage.setItem("user", user);
    navigate("/devices");
  };
  return (
    <Box
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          typography: "title",
          fontWeight: "bold",
          fontSize: "h4.fontSize",
        }}
      >
        Login
      </Box>

      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <TextField id="outlined-basic" label="Username" variant="outlined" />
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, width: "10ch" }} variant="outlined">
        {/* <Link to="/devices"> */}
        <Button variant="outlined" onClick={handleClick}>
          Login
        </Button>
        {/* </Link> */}
      </FormControl>
    </Box>
  );
}
