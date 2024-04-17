import React, { useCallback } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Alert,
  Button,
  Stack,
} from "@mui/material";
import { RHFTextField } from "../../components/hook-form";

function ProfileForm() {
  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    about: Yup.string().required("About is required"),
    avatarUrl: Yup.string().required("Avatar is requires").nullable(true),
  });

  const defaultValues = {
    name: "Aditya",
    about: "",
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema), // Corrected the resolver to use LoginSchema
    defaultValues,
  });

  const {
    reset,
    setError,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const values = watch();
  const handlerDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );
  const onSubmit = async (data) => {
    try {
      // Submit data to backend
      console.log("Data", data);
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        // Corrected setError parameter
        type: "server",
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}

          <RHFTextField
            name="name"
            label="Name..."
            helperText={"The name is visible to all the contact"}
          />
          <RHFTextField
            multiline
            rows={4}
            maxRows={5}
            name="about"
            label="About"
          />
        </Stack>
        <Stack direction={"row"} justifyContent={"end"}>
          <Button color="primary" size="large" type="submit" variant="outlined">
            Save
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}

export default ProfileForm;
