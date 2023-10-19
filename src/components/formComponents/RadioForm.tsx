import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps as MUIRadioGroupProps,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";

type RadioGroupProps = MUIRadioGroupProps & {
  name: string;
  label: string;
};

const RadioForm = ({ ...props }: RadioGroupProps) => {
  const [field, meta] = useField(props.name);
  return (
    <FormControl>
      <RadioGroup
        sx={{ flexDirection: "row", marginRight: "2em" }}
        {...field}
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
      {meta.error && meta.touched ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default RadioForm;
