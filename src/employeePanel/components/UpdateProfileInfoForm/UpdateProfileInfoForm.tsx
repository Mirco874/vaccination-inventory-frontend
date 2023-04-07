import { FC, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import { DateSelector } from "../../../ui/components";
import { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { UserContext } from "../../../context";
import { put } from "../../../utils/apiMethods";
import { User } from "../../../interfaces";

interface Props {
    user?: User
}

type FormData = {
  birthdate: Dayjs | null;
  address: string;
  phone: string;
};

const minDate = "1960-01-01";
const maxDate = "2005-01-01";

export const UpdateProfileInfoForm: FC<Props> = ({ user }) => {

  const initialFormValues = user
    ? {
        birthdate: user.birthDate,
        address: user.address,
        phone: user.phone,
      }
    : {
        birthdate: null,
        address: "",
        phone: "",
      };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({ defaultValues: initialFormValues });



  const onDateChange = (newValue: any) => {
    setValue("birthdate", newValue);
  };

  const { onBlur, ref } = register("birthdate");

  const onSubmitLogin = async (data: FormData) => {
    if (
      data.birthdate?.isValid() &&
      data.birthdate?.isBetween(minDate, maxDate, "day", "[)")
    ) {
      try {
        const body = {
          ...data,
          birthDate: data.birthdate.format("YYYY-MM-DD"),
        };

        await put(`/api/v1/employee/${user?.id}/update-personal-information`,body );
      } catch (error) {
        alert("Error interno del servidor");
      }
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      marginTop="10px"
    >
      <Typography variant="h3" component="h1" margin="auto" marginY="10px">
        Update profile information
      </Typography>

      <form
        className="register-employee-form"
        noValidate
        onSubmit={handleSubmit(onSubmitLogin)}
      >
        <Box display="flex" flexDirection="column" width="70%" margin="auto">

          <DateSelector
            label="Birth date*:"
            {...register("birthdate", {
              required: "This field is required",
            })}
            name="birthdate"
            defaultValue={user? user?.birthDate : ""}
            onBlur={onBlur}
            onChange={onDateChange}
            ref={ref}
            minDate={new Date(minDate)}
            maxDate={new Date(maxDate)}
            hasError={!!errors.birthdate}
            helperText={errors.birthdate?.message}
          />

          <TextField
            label="Address*:"
            variant="outlined"
            type="text"
            {...register("address", {
              required: "This field is required",
            })}
            error={!!errors.address}
            helperText={errors.address?.message}
          />

          <TextField
            label="Phone*:"
            variant="outlined"
            type="text"
            {...register("phone", {
              required: "This field is required",
            })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />

          <Box marginTop="20px">
            <Button type="submit" variant="contained">
              Update
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
