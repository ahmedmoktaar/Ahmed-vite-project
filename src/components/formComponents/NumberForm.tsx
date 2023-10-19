import { TextField, TextFieldProps as MUITextFieldProps } from "@mui/material";
import { useField } from "formik";

type TextFieldProps = MUITextFieldProps & {
  name: string;
};
const NumberForm = ({ name, ...props }: TextFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      variant="outlined"
      type="number"
      {...field}
      {...props}
      helperText={meta.error && meta.touched ? meta.error : null}
    />
  );
};

export default NumberForm;
