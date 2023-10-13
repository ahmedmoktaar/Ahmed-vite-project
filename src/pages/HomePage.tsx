import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// ------------------------
// sign up button component
// ------------------------ 
const SignUpButton = () => {
  return (
    <Button
      component={Link}
      to="/signup"
      variant="contained"
      sx={{ fontSize: "1.5em", textTransform: "none" }}
      color="purple"
    >
      Sign Up
    </Button>
  );
};

// ---------------- 
// main component
// ---------------- 
const HomePage = () => {
  return (
    <Holder>
      <div className="login-button">
        <SignUpButton />
      </div>
    </Holder>
  );
};

// ----------------
// STYLED COMPONENT
// ----------------
const Holder = styled.div`
  height: 100%;
  .login-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
export default HomePage;
