import styled from "@emotion/styled";
import FormSignUP, { FormValues } from "./FormSignUp";
import { useState } from "react";
import ResultSignUp from "./ResultSignUp";

const Index: React.FC = () => {
  const [values, setValues] = useState<FormValues | null>(null);

  const handleSubmit = (values: FormValues) => {
    return setValues(values);
  };

  const handleReset = () => {
    return setValues(null);
  };

  return (
    <Holder>
      <FormSignUP onSubmit={handleSubmit} onReset={handleReset} />
      <ResultSignUp values={values} />
    </Holder>
  );
};

// ------------------------------
// Styled Component
// ------------------------------
const Holder = styled.div`
  display: grid;
  grid-template-columns: 20em auto;
  height: 100%;
  margin: 2em;
  gap: 5em;
`;

export default Index;
