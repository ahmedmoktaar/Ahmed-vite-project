import styled from "@emotion/styled";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Formik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import * as Yup from "yup";
import FormSVG from "../assets/svg/FormSVG";

// ------------------------------
// declartion type for values
// ------------------------------
type values = {
  firstName: string;
  lastName: string;
  Age: number;
  email: string;
  country: string;
  password: string;
  confirmPassword: string;
  startingDate: string;
  accountType: string;
  termsConditions: string;
};

// ------------------------------
// Sign Up Result Component
// ------------------------------
const SignUpResult = (props: { className: string; signUpValues: values }) => {
  const { className, signUpValues } = props;

  const Result = (props: {
    svg?: React.JSX.Element;
    name: string;
    value: string | number;
  }) => {
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar {...(props.svg ? null : { sx: { display: "none" } })}>
            {props.svg}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`${props.name} ${props.value}`} />
      </ListItem>
    );
  };

  return (
    <List
      className={className}
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <Result
        svg={FormSVG.PersonIcon}
        name="First Name: "
        value={signUpValues.firstName}
      />
      <Result name="Last Name:" value={signUpValues.lastName} />
      <Divider variant="inset" component="li" />

      <Result svg={FormSVG.CakeIcon} name="Age: " value={signUpValues.Age} />
      <Divider variant="inset" component="li" />

      <Result
        svg={FormSVG.MailIcon}
        name="Email: "
        value={signUpValues.email}
      />
      <Divider variant="inset" component="li" />

      <Result
        svg={FormSVG.FlagIcon}
        name="Country: "
        value={signUpValues.country}
      />
      <Divider variant="inset" component="li" />

      <Result
        svg={FormSVG.KeyIcon}
        name="Password: "
        value={signUpValues.password}
      />
      <Result name="Confirm Password: " value={signUpValues.confirmPassword} />
      <Divider variant="inset" component="li" />

      <Result
        svg={FormSVG.CalendarMonthIcon}
        name="Starting Date: "
        value={signUpValues.startingDate}
      />
      <Divider variant="inset" component="li" />

      <Result
        svg={FormSVG.CardMembershipIcon}
        name="Account Type: "
        value={signUpValues.accountType}
      />
      <Divider variant="inset" component="li" />

      <Result
        svg={FormSVG.HandshakeIcon}
        name="Terms and Conditions: "
        value={signUpValues.termsConditions}
      />
    </List>
  );
};

// ------------------------------
// Main Component
// ------------------------------
const SignUp = () => {
  // ------------------------------
  // Formik component Props
  // ------------------------------
  const initialValues: values = {
    firstName: "",
    lastName: "",
    Age: 0,
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
    startingDate: new Date().toDateString(),
    accountType: "",
    termsConditions: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    Age: Yup.number()
      .min(16, "You must be over 16 to continue")
      .max(125, "Invalid age"),
    email: Yup.string().email("Invalid email").required("Required"),
    country: Yup.string().required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Must be 8 characters or more")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&]+/, "One special character")
      .matches(/\d+/, "One number"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
    startingDate: Yup.date()
      .min(2023 - 10 - 13, "Invalid date")
      .max(2024 - 10 - 13, "Invalid date"),
    accountType: Yup.string().required("Required"),
    termsConditions: Yup.string().required("Required"),
  });

  const onSubmit = (values: values) => {
    return setSignUpValues(values);
  };

  // ------------------------------
  // Sign Up Values state
  // ------------------------------
  const [signUpValues, setSignUpValues]: [
    values,
    Dispatch<SetStateAction<values>>
  ] = useState(initialValues);

  // ------------------------------
  // JSX
  // ------------------------------
  return (
    <Holder>
      <Formik
        className="sign-up-form"
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      ></Formik>

      <SignUpResult
        className="sign-up-result"
        signUpValues={signUpValues}
      ></SignUpResult>
    </Holder>
  );
};

// ------------------------------
// Styled Component
// ------------------------------

const Holder = styled.div`
  display: flex;
`;

export default SignUp;
