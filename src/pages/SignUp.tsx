import styled from "@emotion/styled";
import {
  Autocomplete,
  Avatar,
  Button,
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
import { Field, FieldProps, Form, Formik } from "formik";
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
  age?: number | undefined;
  email: string;
  country: string | undefined;
  password: string;
  confirmPassword: string;
  accountType: string;
  termsConditions: boolean;
};

// ------------------------------
// labels
// ------------------------------
const Labels = {
  firstName: "First Name: ",
  lastName: "Last Name: ",
  age: "Age: ",
  email: "Email: ",
  country: "Country: ",
  password: "Password: ",
  confirmPassword: "Confirm Password: ",
  accountType: "Account Type: ",
  termsConditions: "Agree to Terms and Conditions: ",
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
const SignUpInput = () => {
  // ------------------------------
  // MUI Components
  // ------------------------------
  const InputComponent = ({ field, meta }: FieldProps) => {
    return (
      <div className="center-error">
        <TextField
          variant="outlined"
          label="Required*"
          size="small"
          {...field}
          className={
            meta.error && meta.touched ? "error-color-border" : undefined
          }
        />
        <span className="error-color-meessage">
          {meta.error && meta.touched ? meta.error : null}
        </span>
      </div>
    );
  };

  const AgeComponent = ({ field, meta }: FieldProps) => {
    return (
      <div className="center-error">
        <TextField
          variant="outlined"
          size="small"
          label="Enter Your Age"
          type="number"
          {...field}
          className={
            meta.error && meta.touched ? "error-color-border" : undefined
          }
        />
        <span className="error-color-meessage">
          {meta.error && meta.touched ? meta.error : null}
        </span>
      </div>
    );
  };

  const CountryComponent = ({ field, meta, form }: FieldProps) => {
    const Countries = [
      "Egypt",
      "Andorra",
      "Benin",
      "Cameroon",
      "Grenada",
      "Italy",
      "Mauritius",
      "Maldives",
      "Malawi",
      "Mexico",
      "Malaysia",
      "Mozambique",
      "Namibia",
      "New Caledoni",
      "Niger",
      "Norfolk Islan",
      "Nigeria",
    ];
    return (
      <div className="center-error">
        <Autocomplete
          disablePortal
          sx={{ width: 200, display: "inline-flex" }}
          options={Countries}
          value={form.values.country}
          onChange={(_e, value: string | null) =>
            form.setFieldValue("country", value)
          }
          renderInput={(params) => (
            <TextField
              variant="outlined"
              {...params}
              label="Required*"
              {...field}
              className={
                meta.error && meta.touched ? "error-color-border" : undefined
              }
            />
          )}
        />
        <span className="error-color-meessage">
          {meta.error && meta.touched ? meta.error : null}
        </span>
      </div>
    );
  };

  const PasswordComponent = ({ field, meta }: FieldProps) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };
    return (
      <div className="center-error">
        <FormControl sx={{ width: "25ch" }} variant="outlined" size="small">
          <InputLabel htmlFor="password">Required*</InputLabel>
          <OutlinedInput
            id="password"
            label="Required*"
            size="small"
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
            {...field}
            className={
              meta.error && meta.touched ? "error-color-border" : undefined
            }
          />
        </FormControl>
        <span className="error-color-meessage">
          {meta.error && meta.touched ? meta.error : null}
        </span>
      </div>
    );
  };

  const ConfirmPasswordComponent = ({ field, meta }: FieldProps) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };
    return (
      <div className="center-error">
        <FormControl sx={{ width: "25ch" }} variant="outlined" size="small">
          <InputLabel htmlFor="confirmPassword">Required*</InputLabel>
          <OutlinedInput
            id="confirmPassword"
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
            label="Required*"
            {...field}
            className={
              meta.error && meta.touched ? "error-color-border" : undefined
            }
            size="small"
          />
        </FormControl>
        <span className="error-color-meessage">
          {meta.error && meta.touched ? meta.error : null}
        </span>
      </div>
    );
  };

  const AccountTypeComponent = ({ field, meta }: FieldProps) => {
    return (
      <div className="center-error">
        <FormControl>
          <RadioGroup
            sx={{ flexDirection: "row", marginRight: "2em" }}
            aria-labelledby="demo-radio-buttons-group-label"
            {...field}
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
        <span className="error-color-meessage">
          {meta.error && meta.touched ? meta.error : null}
        </span>
      </div>
    );
  };

  const TermsConditionsComponent = ({ field, meta }: FieldProps) => {
    return (
      <div className="center-error">
        <Checkbox
          {...field}
          className={
            meta.error && meta.touched ? "error-color-border" : undefined
          }
        />
        <span className="error-color-meessage">
          {meta.error && meta.touched ? meta.error : null}
        </span>
      </div>
    );
  };

  return (
    <>
      <label htmlFor={Keys.firstName}>{Labels.firstName} </label>
      <Field id={Keys.firstName} name={Keys.firstName}>
        {(props: FieldProps): React.ReactNode => {
          return (
            <>
              <InputComponent {...props} />
            </>
          );
        }}
      </Field>
      <Divider variant="inset" component="hr" sx={{ opacity: "0%" }} />
      <label htmlFor={Keys.lastName}>{Labels.lastName} </label>
      <Field id={Keys.lastName} name={Keys.lastName}>
        {(props: FieldProps): React.ReactNode => {
          return <InputComponent {...props} />;
        }}
      </Field>
      <Divider variant="inset" component="hr" />
      <label htmlFor={Keys.age}>{Labels.age} </label>
      <Field id={Keys.age} name={Keys.age}>
        {(props: FieldProps): React.ReactNode => {
          return <AgeComponent {...props} />;
        }}
      </Field>
      <Divider variant="inset" component="hr" />
      <label htmlFor={Keys.email}>{Labels.email} </label>
      <Field id={Keys.email} name={Keys.email}>
        {(props: FieldProps): React.ReactNode => {
          return <InputComponent {...props} />;
        }}
      </Field>
      <Divider variant="inset" component="hr" />
      <label htmlFor={Keys.country}>{Labels.country} </label>
      <Field id={Keys.country} name={Keys.country}>
        {(props: FieldProps): React.ReactNode => {
          return <CountryComponent {...props} />;
        }}
      </Field>
      <Divider variant="inset" component="hr" />
      <label htmlFor={Keys.password}>{Labels.password} </label>
      <Field id={Keys.password} name={Keys.password}>
        {(props: FieldProps): React.ReactNode => {
          return <PasswordComponent {...props} />;
        }}
      </Field>
      <Divider variant="inset" component="hr" sx={{ opacity: "0%" }} />
      <label htmlFor={Keys.confirmPassword}>{Labels.confirmPassword} </label>
      <Field id={Keys.confirmPassword} name={Keys.confirmPassword}>
        {(props: FieldProps): React.ReactNode => {
          return <ConfirmPasswordComponent {...props} />;
        }}
      </Field>
      <Divider variant="inset" component="hr" />
      <label htmlFor={Keys.accountType}>{Labels.accountType} </label>
      <Field id={Keys.accountType} name={Keys.accountType}>
        {(props: FieldProps): React.ReactNode => {
          return <AccountTypeComponent {...props} />;
        }}
      </Field>
      <Divider variant="inset" component="hr" />
      <label htmlFor={Keys.termsConditions}>{Labels.termsConditions} </label>
      <Field id={Keys.termsConditions} name={Keys.termsConditions}>
        {(props: FieldProps): React.ReactNode => {
          return <TermsConditionsComponent {...props} />;
        }}
      </Field>
      <Divider variant="inset" component="hr" />
    </>
  );
};

// ------------------------------
// Sign Up Result Component
// ------------------------------
const SignUpResult = (props: { className: string; signUpValues: values }) => {
  const { className, signUpValues } = props;

  const Result = (props: {
    svg?: React.JSX.Element;
    name: string;
    value: string | number | boolean | undefined;
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
        maxWidth: 360,
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
    age: undefined,
    email: "",
    country: undefined,
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

  return (
    <Holder>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="sign-up-form">
          <SignUpInput />
          <Button variant="contained" type="submit" sx={{ marginRight: "1em" }}>
            Submit
          </Button>
          <Button variant="contained" type="reset" color="warning">
            Reset
          </Button>
        </Form>
      </Formik>

      <SignUpResult className="sign-up-result" signUpValues={signUpValues} />
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
  .sign-up-form {
    label {
      display: inline-block;
      margin-bottom: 0.8em;
    }
  }

  .center-error {
    display: flex;
    align-items: center;
  }

  .error-color-border {
    fieldset {
      border-color: red;
    }
  }
  .error-color-meessage {
    color: red;
    display: inline-block;
    margin: 0.5em;
  }
`;

export default SignUp;
