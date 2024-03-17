import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Stack,
} from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { RHFTextField } from "../../components/hook-form";
import RHFAutocomplete from "../../components/hook-form/RHFAutocomplete";
import { XCircle } from "phosphor-react";

const MEMBERS = ["Name 1", "Name 2", "Name 3"];

// Transition component for the Dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({ handleClose }) => {
  // Define validation schema
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"), // Corrected typo
    member: Yup.array().min(2, "Must have at least 2 members"),
  });

  const defaultValues = {
    title: "",
    member: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log("DATA", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={1}>
          <RHFTextField name="title" label="Title" />

          <RHFAutocomplete
            name="member"
            label="Members"
            multiple
            freeSolo
            options={MEMBERS.map((options) => options)}
            ChipProps={{ size: "medium" }}
          />
          {/* Display validation error message */}
          {errors.title && <p>{errors.title.message}</p>}
          <Stack
            spacing={2}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"end"}
          >
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              Create
            </Button>
          </Stack>
        </Stack>
      </form>
    </FormProvider>
  );
};

function CreateGroup({ open, handleClose }) {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={3}
      >
        <DialogTitle>Create New Group</DialogTitle>
        <IconButton onClick={handleClose}>
          <XCircle size={32} />
        </IconButton>
      </Stack>
      <DialogContent>
        {/* Render the form component */}
        <CreateGroupForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
}

export default CreateGroup;
