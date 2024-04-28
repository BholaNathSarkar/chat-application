import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import RHFCodes from "../../components/hook-form/RHFCodes";
import { useDispatch, useSelector } from "react-redux";
import { VerifyEmail } from "../../redux/slice/auth";

function VerifyForm() {
  const dispatch = useDispatch();
  // Email => get it from store
  const { email } = useSelector((state) => state.auth);

  const VerifyFormSchema = Yup.object().shape({
    code1: Yup.string().required("code is required"),
    code2: Yup.string().required("code is required"),
    code3: Yup.string().required("code is required"),
    code4: Yup.string().required("code is required"),
    code5: Yup.string().required("code is required"),
    code6: Yup.string().required("code is required"),
  });

  const defaultValues = {
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  };
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(VerifyFormSchema), // Corrected the resolver to use LoginSchema
    defaultValues,
  });

  const { handleSubmit } = methods; // Removed formState from here

  const onSubmit = async (data) => {
    try {
      dispatch(
        VerifyEmail({
          email: email,
          otp: `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  const inputs = ["code1", "code2", "code3", "code4", "code5", "code6"];

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {/* CUSTOM OTP INPUT */}
            <RHFCodes inputs={inputs} keyName="code" />
            <Button
              fullWidth
              color="inherit"
              size="large"
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "text.primary",
                color: (theme) =>
                  theme.palette.mode === "light" ? "common.white" : "grey.800",
                "&:hover": {
                  bgcolor: "text.primary",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? "common.white"
                      : "grey.800",
                },
              }}
            >
              Verify OTP
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </>
  );
}

export default VerifyForm;
