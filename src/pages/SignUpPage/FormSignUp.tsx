import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextForm from "../../components/formComponents/TextForm";
import NumberForm from "../../components/formComponents/NumberForm";
import AutoCompleteForm from "../../components/formComponents/AutoCompleteForm";
import PasswordForm from "../../components/formComponents/PasswordForm";
import RadioForm from "../../components/formComponents/RadioForm";
import CheckBoxForm from "../../components/formComponents/CheckBoxForm";
// ------------------------------
// Declartion type for values
// ------------------------------
interface FormValues {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  country: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  termsConditions: boolean;
}

type Props = {
  onSubmit: (values: FormValues) => void;
  onReset: () => void;
};

// ------------------------------
// Name attribute for components
// ------------------------------
const formsName = {
  firstName: "firstName",
  lastName: "lastName",
  age: "age",
  email: "email",
  country: "country",
  password: "password",
  confirmPassword: "confirmPassword",
  accountType: "accountType",
  termsConditions: "termsConditions",
};

// ------------------------------
// Label for components placeholder
// ------------------------------
const formsLabel = {
  [formsName.firstName]: "First Name",
  [formsName.lastName]: "Last Name",
  [formsName.age]: "Age",
  [formsName.email]: "Email",
  [formsName.country]: "Country",
  [formsName.password]: "Password",
  [formsName.confirmPassword]: "Confirm Password",
  [formsName.accountType]: "Account Type",
  [formsName.termsConditions]: "I agree to the terms and conditions",
};

// ------------------------------
// Main Component
// ------------------------------
const FormSignUp: React.FC<Props> = ({ onSubmit, onReset }) => {
  // ------------------------------
  // Formik component Props
  // ------------------------------
  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    termsConditions: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .min(16, "Age must be over 16")
      .max(125, "Invalid age"),
    email: Yup.string().email("Invalid email").required("Required"),
    country: Yup.string().required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Must be 8 characters or more")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&.-=^()<>/_~]+/, "One special character")
      .matches(/\d+/, "One number"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
    accountType: Yup.string().required("Required"),
    termsConditions: Yup.boolean().oneOf([true], "Required"),
  });

  return (
    <Holder>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="forms-wrapper">
          <TextForm
            label={formsLabel.firstName}
            id={formsName.firstName}
            name={formsName.firstName}
          />
          <TextForm
            label={formsLabel.lastName}
            id={formsName.lastName}
            name={formsName.lastName}
          />
          <NumberForm
            label={formsLabel.age}
            id={formsName.age}
            name={formsName.age}
          />
          <TextForm
            label={formsLabel.email}
            id={formsName.email}
            name={formsName.email}
          />
          <AutoCompleteForm
            label={formsLabel.country}
            id={formsName.country}
            name={formsName.country}
          />
          <PasswordForm
            label={formsLabel.password}
            id={formsName.password}
            name={formsName.password}
          />
          <PasswordForm
            label={formsLabel.confirmPassword}
            id={formsName.confirmPassword}
            name={formsName.confirmPassword}
          />
          <CheckBoxForm
            label={formsLabel.termsConditions}
            id={formsName.termsConditions}
            name={formsName.termsConditions}
          />
          <RadioForm
            label={formsLabel.accountType}
            id={formsName.accountType}
            name={formsName.accountType}
          />
          <div className="button-group">
            <Button variant="contained" type="submit">
              Submit
            </Button>
            <Button
              variant="contained"
              type="reset"
              color="warning"
              onClick={() => onReset()}
            >
              Reset
            </Button>
          </div>
        </Form>
      </Formik>
    </Holder>
  );
};

// ------------------------------
// Styled Component
// ------------------------------
const Holder = styled.div`
  .forms-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .button-group {
    display: flex;
    gap: 2em;
    justify-content: center;
  }
`;

export default FormSignUp;
export type { FormValues };
