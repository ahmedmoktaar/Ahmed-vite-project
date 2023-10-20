import {
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps as MUIOutlinedInputProps,
} from "@mui/material";
import { useState } from "react";
import FormSVG from "../../assets/svg/FormSVG";
import { useField } from "formik";

type OutlinedInputProps = MUIOutlinedInputProps & {
  name: string;
};

const PasswordForm = (props: OutlinedInputProps) => {
  const [field, meta] = useField(props.name);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel htmlFor={props.name} error={!!meta.error && meta.touched}>
        {props.label}
      </InputLabel>
      <OutlinedInput
        type={showPassword ? "text" : "password"}
        endAdornment={
          <IconButton onClick={handleClickShowPassword} edge="end">
            {showPassword ? FormSVG.VisibilityOff : FormSVG.Visibility}
          </IconButton>
        }
        {...field}
        error={!!meta.error && meta.touched}
        label={props.label}
      />
      {meta.error && meta.touched ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default PasswordForm;
