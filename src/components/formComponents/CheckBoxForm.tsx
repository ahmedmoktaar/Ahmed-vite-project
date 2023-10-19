import {
  Checkbox,
  CheckboxProps as MUICheckboxProps,
  FormControlLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";
import { useState } from "react";

type CheckboxProps = MUICheckboxProps & {
  name: string;
  label: string;
};

const CheckBoxForm = (props: CheckboxProps) => {
  const [field, meta] = useField(props.name);
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            {...props}
            {...field}
            onClick={() => setChecked(!checked)}
            checked={field.value}
          />
        }
        label={props.label}
      />
      {meta.error && meta.touched ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
};
export default CheckBoxForm;
