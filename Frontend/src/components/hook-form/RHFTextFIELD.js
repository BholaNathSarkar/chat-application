import PropTypes from "prop-types";

// forms
import { useFormContext, Controller } from "react-hook-form";

//  @mui
import { TextField } from "@mui/material";

RHFTextFIELD.prototype={
    name: PropTypes.string,
    helperText: PropTypes.node,
};

export default function RHFTextFIELD({ name, helperText, ...other }) {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            error={!!error}
            helperText={error ? error.message : helperText}
            {...other}
          />
        )}
      />
    </>
  );
}
