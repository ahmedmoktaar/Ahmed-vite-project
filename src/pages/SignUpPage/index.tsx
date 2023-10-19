import styled from "@emotion/styled";
import FormSignUP from "./FormSignUp";

const index = () => {
  return (
    <Holder>
      <FormSignUP />
    </Holder>
  );
};

// ------------------------------
// Styled Component
// ------------------------------
const Holder = styled.div`
  display: grid;
  grid-template-columns: 30em auto;
  height: 100%;
  margin: 2em;
  hr {
    margin: 0.8em;
  }
`;

export default index;
