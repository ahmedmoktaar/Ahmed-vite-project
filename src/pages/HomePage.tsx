import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Holder>
      <div className="login-butoon">
        <SignUpButton />
      </div>
    </Holder>
  );
};

const SignUpButton = () => {
  return (
    <Button
      component={Link}
      to="/signup"
      variant="contained"
      size="large"
      color="purple" 
    >
      Sign Up
    </Button>
  );
};

const Holder = styled.div`
    height: 100%;
    .login-butoon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
  }
`;
export default HomePage;
