import { Autocomplete } from "@mui/material";
import countries from "../../assets/listCountries";
import { useField } from "formik";
import { TextField, TextFieldProps as MUITextFieldProps } from "@mui/material";

type TextFieldProps = MUITextFieldProps & {
  name: string;
};

const AutoCompleteForm = ({ name, ...props }: TextFieldProps) => {
  const [field, meta, form] = useField(name);
  return (
    <Autocomplete
      disablePortal
      options={countries}
      onChange={(_e, value) => form.setValue(value?.value)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      value={field.value ? field.value : ''}
      renderInput={(params) => (
        <TextField
          variant="outlined"
          {...props}
          {...params}
          {...field}
          error={!!meta.error && meta.touched}
          helperText={meta.error && meta.touched ? meta.error : undefined}
        />
      )}
    />
  );
};

export default AutoCompleteForm;
