import styled from "@emotion/styled";
import {
  Autocomplete,
  Avatar,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import * as Yup from "yup";
import FormSVG from "../assets/svg/FormSVG";
import React from "react";

// ------------------------------
// declartion type for values
// ------------------------------
type values = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  country: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  termsConditions: string;
};

// ------------------------------
// labels
// ------------------------------
const Labels = {
  firstName: "First Name: ",
  lastName: "Last Name: ",
  age: "age: ",
  email: "Email: ",
  country: "Country: ",
  password: "Password: ",
  confirmPassword: "Confirm Password: ",
  accountType: "Account Type: ",
  termsConditions: "Terms and Conditions: ",
};

// ------------------------------
// keys of labels
// ------------------------------
const Keys = {
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
// Sign Up input Components
// ------------------------------
const FormInput = () => {
  // ------------------------------
  // MUI Components
  // ------------------------------
  const InputComponent = (props) => (
    <TextField
      id="outlined-required"
      label="Required"
      size="small"
      {...props}
    />
  );
  const AgeComponent = (props) => (
    <TextField id="outlined-number" label="Number" type="number" {...props} />
  );

  const CountryComponent = (props) => {
    const Countries = [
      { label: "Egypt" },
      { label: "Andorra" },
      { label: "Benin" },
      { label: "Cameroon" },
      { label: "Grenada" },
      { label: "Italy" },
      { label: "Mauritius" },
      { label: "Maldives" },
      { label: "Malawi" },
      { label: "Mexico" },
      { label: "Malaysia" },
      { label: "Mozambique" },
      { label: "Namibia" },
      { label: "New Caledoni" },
      { label: "Niger" },
      { label: "Norfolk Islan" },
      { label: "Nigeria" },
    ];
    return (
      <Autocomplete
        disablePortal
        sx={{ width: 200 }}
        id="combo-box-demo"
        options={Countries}
        renderInput={(params) => (
          <TextField {...params} {...props} label="Country" />
        )}
      />
    );
  };
  const PasswordComponent = (props) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };
    return (
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? FormSVG.VisibilityOff : FormSVG.Visibility}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          {...props}
        />
      </FormControl>
    );
  };
  const AccountTypeComponent = (props) => {
    return (
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          {...props}
        >
          <FormControlLabel value="Basic" control={<Radio />} label="Basic" />
          <FormControlLabel value="Gold" control={<Radio />} label="Gold" />
          <FormControlLabel
            value="Platinum"
            control={<Radio />}
            label="Platinum"
          />
        </RadioGroup>
      </FormControl>
    );
  };
  const TermsConditionsComponent = (props) => {
    return <Checkbox {...props} />;
  };

  return (
    <>
      <label htmlFor={Keys.firstName}>{Labels.firstName} </label>
      <Field id={Keys.firstName} as={InputComponent} name={Keys.firstName} />
      <ErrorMessage name={Keys.firstName}></ErrorMessage>
      <Divider variant="inset" component="hr" />

      <label htmlFor={Keys.lastName}>{Labels.lastName} </label>
      <Field id={Keys.lastName} as={InputComponent} name={Keys.lastName} />
      <ErrorMessage name={Keys.lastName}></ErrorMessage>
      <Divider variant="inset" component="hr" />

      <label htmlFor={Keys.age}>{Labels.age} </label>
      <Field id={Keys.age} as={AgeComponent} name={Keys.age} />
      <ErrorMessage name={Keys.age}></ErrorMessage>
      <Divider variant="inset" component="hr" />

      <label htmlFor={Keys.email}>{Labels.email} </label>
      <Field id={Keys.email} as={InputComponent} name={Keys.email} />
      <ErrorMessage name={Keys.email}></ErrorMessage>
      <Divider variant="inset" component="hr" />

      <label htmlFor={Keys.country}>{Labels.country} </label>
      <Field id={Keys.country} as={CountryComponent} name={Keys.country} />
      <ErrorMessage name={Keys.country}></ErrorMessage>
      <Divider variant="inset" component="hr" />

      <label htmlFor={Keys.password}>{Labels.password} </label>
      <Field id={Keys.password} as={PasswordComponent} name={Keys.password} />
      <ErrorMessage name={Keys.password}></ErrorMessage>
      <Divider variant="inset" component="hr" />

      <label htmlFor={Keys.confirmPassword}>{Labels.confirmPassword} </label>
      <Field
        id={Keys.confirmPassword}
        as={PasswordComponent}
        name={Keys.confirmPassword}
      />
      <ErrorMessage name={Keys.confirmPassword}></ErrorMessage>
      <Divider variant="inset" component="hr" />

      <label htmlFor={Keys.accountType}>{Labels.accountType} </label>
      <Field
        id={Keys.accountType}
        as={AccountTypeComponent}
        name={Keys.accountType}
      />
      <ErrorMessage name={Keys.accountType}></ErrorMessage>
      <Divider variant="inset" component="hr" />

      <label htmlFor={Keys.termsConditions}>{Labels.termsConditions} </label>
      <Field
        id={Keys.termsConditions}
        as={TermsConditionsComponent}
        name={Keys.termsConditions}
      />
      <ErrorMessage name={Keys.termsConditions}></ErrorMessage>
      <Divider variant="inset" component="hr" />
    </>
  );
  // const Container = [];

  // for (const [key, value] of Object.entries(Labels)) {
  //   Container.push(
  //     <div key={key}>
  //       <label htmlFor={key}>{value} </label>
  //       <Field
  //         id={key}
  //         name={key}
  //         component={
  //           key === "firstName" || key === "lastName" || key === "email"
  //             ? InputComponent
  //             : key === "Age"
  //             ? AgeComponent
  //             : key === "password" || key === "confirmPassword"
  //             ? PasswordComponent
  //             : key === "country"
  //             ? CountryComponent
  //             : key === "accountType"
  //             ? AccountTypeComponent
  //             : key === "termsConditions"
  //             ? TermsConditionsComponent
  //             : null
  //         }
  //       />
  //       <ErrorMessage name={key}/>
  //     </div>
  //   );
  // }
  // return Container;
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
        name={Labels.firstName}
        value={signUpValues.firstName}
      />
      <Result name={Labels.lastName} value={signUpValues.lastName} />
      <Divider variant="inset" component="li" />

      <Result
        svg={FormSVG.CakeIcon}
        name={Labels.age}
        value={signUpValues.age}
      />
      <Divider variant="inset" component="li" />

      <Result
        svg={FormSVG.MailIcon}
        name={Labels.email}
        value={signUpValues.email}
      />
      <Divider variant="inset" component="li" />

      <Result
        svg={FormSVG.FlagIcon}
        name={Labels.country}
        value={signUpValues.country}
      />
      <Divider variant="inset" component="li" />

      <Result
        svg={FormSVG.KeyIcon}
        name={Labels.password}
        value={signUpValues.password}
      />
      <Result
        name={Labels.confirmPassword}
        value={signUpValues.confirmPassword}
      />
      <Divider variant="inset" component="li" />

      <Result
        svg={FormSVG.CardMembershipIcon}
        name={Labels.accountType}
        value={signUpValues.accountType}
      />
      <Divider variant="inset" component="li" />

      <Result
        svg={FormSVG.HandshakeIcon}
        name={Labels.termsConditions}
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
    age: 0,
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    termsConditions: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string(),
    age: Yup.number()
      .typeError("Age must be a number")
      .min(16, "Age must be over 16")
      .max(125, "Invalid age")
      .required("Required"),
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
    termsConditions: Yup.string().required("Required"),
  });

  // ------------------------------
  // Sign Up Values state
  // ------------------------------
  const [signUpValues, setSignUpValues]: [
    values,
    Dispatch<SetStateAction<values>>
  ] = useState(initialValues);

  const onSubmit = (values: values) => {
    return setSignUpValues(values);
  };

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
      >
        <Form>
          <FormInput />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

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
  display: grid;
  grid-template-columns: 30em auto;
  height: 100%;
  hr {
    margin: 1em;
  }
`;

export default SignUp;
