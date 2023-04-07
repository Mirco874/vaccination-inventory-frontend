import { FC, useContext} from "react"
import { Box, Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { DateSelector } from "../../../ui/components";
import dayjs, { Dayjs } from "dayjs";
import { useForm } from "react-hook-form";
import { put } from "../../../utils/apiMethods";
import { vaccineTypeOptions } from "../../../data/";
import { validations } from "../../../utils";
import { UserContext } from "../../../context";

interface Props {
    userId: number;
}

type FormData = {
    idVaccine: number;
    vaccinationDate: Dayjs | null;
    doses: number;
};
  
const minDate = "2021-05-05";
const maxDate = dayjs().format('YYYY-MM-DD');

export const RegisterVaccinationForm: FC<Props> = ({ userId })=> {
    const initialFormValues: FormData = {
        idVaccine: -1,
        vaccinationDate: null,
        doses: 0,
    };

    const { user, loadLoggedUserData } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({ defaultValues: initialFormValues });

    const onDateChange = (newValue: any) => {
        setValue("vaccinationDate", newValue);
    };

    const { onBlur, ref } = register("vaccinationDate");

    const onSubmitVaccinationInformation = async (data: FormData) => {
        if ( data.vaccinationDate?.isValid() && data.vaccinationDate?.isBetween(minDate, maxDate, "day", "[)")) {
          try {
            const body = { 
                ...data, 
                vaccinated: true,
                vaccinationDate: data.vaccinationDate.format("YYYY-MM-DD") 
            };
            await put(`/api/v1/employee/${userId}/update-vaccine-information`, body);

            loadLoggedUserData(user!.id)

          } catch (error) {
            alert("Error interno del servidor");
          }
        }
      };


  return (
        <Box display="flex" flexDirection="column" width="70%" margin="auto">
                <Typography variant="h3" component="h1" margin="auto" marginY="10px">
                    Vaccine information
                </Typography>

            <form onSubmit={handleSubmit(onSubmitVaccinationInformation)} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label = "Vaccine type"
                            select
                            fullWidth
                            defaultValue={initialFormValues.idVaccine}
                            variant="outlined"
                            {...register("idVaccine", {
                                required: "This field is required",
                                validate:validations.isValidVaccineType
                            })}
                            error={!!errors.idVaccine}
                            helperText={errors.idVaccine?.message}
                        >
                            {
                            vaccineTypeOptions.map(
                                (option, index)=>(
                                    <MenuItem key={index} value={option.value} >
                                        {option.name}
                                    </MenuItem>
                            ))
                            }
                        </TextField>
                    </Grid>

                    <Grid item xs={6}>
                    <DateSelector
                        label="Vaccination date*:"
                        {...register("vaccinationDate", {
                        required: "This field is required",
                        })}
                        name="vaccinationDate"
                        onBlur={onBlur}
                        onChange={onDateChange}
                        ref={ref}
                        minDate={new Date(minDate)}
                        maxDate={new Date(maxDate)}
                        hasError={!!errors.vaccinationDate}
                        helperText={errors.vaccinationDate?.message}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="doses"
                        variant="outlined"
                        fullWidth
                        type="number" 
                        defaultValue={initialFormValues.doses}
                        inputProps={{ min:1, max:5 }}
                        {...register("doses", {
                        required: "This field is required", validate:validations.isCorrectNumberOfDoses
                        })}
                        error={!!errors.doses}
                        helperText={errors.doses?.message}
                    />
                </Grid>
                </Grid>
                
                <Grid item >
                    <Button 
                        variant="contained" 
                        type="submit"
                    >
                        Save vaccination information
                    </Button>
                </Grid>

                </form>
        </Box>
  )
}
