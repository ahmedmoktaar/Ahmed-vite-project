import { TextField, TextFieldProps as MUITextFieldProps } from "@mui/material";
import { useField } from "formik";

type TextFieldProps = MUITextFieldProps & {
  name: string;
};
const TextForm = ({ name, ...props }: TextFieldProps) => {
  const [field, meta] = useField(name);
  return (
    <TextField
      variant="outlined"
      {...props}
      {...field}
      error={!!meta.error && meta.touched}
      helperText={meta.error && meta.touched ? meta.error : null}
    />
  );
};
export default TextForm;
