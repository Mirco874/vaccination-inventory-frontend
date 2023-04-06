import { Button, Grid, TextField, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import { validations } from "../../../utils";
import { EmployeeManagerContext } from "../../../context";

interface Props { 
    onCancel: ()=> void;
}

type FormData = {
    name: string;
    lastName: string;
  }
  
export const EditEmployeeForm: FC<Props> = ({ onCancel }) => {

    const { targetEmployee } =useContext(EmployeeManagerContext);

    const initialFormValues: FormData = {
        name: targetEmployee.basicInfo.name,
        lastName: targetEmployee.basicInfo.lastName,
      }

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues: initialFormValues});

    const onSubmit = ( data: FormData ) => {
        console.log(data)
    }

  return (
    <form 
        className="register-employee-form" 
        noValidate
        onSubmit={ handleSubmit(onSubmit) }
    >
        <Grid container spacing={1} marginTop="20px">
                
                <Grid item xs={8}>
                    <Typography variant="body1" > 
                        <b>IdentityCard: </b> {targetEmployee.basicInfo.identityCard}
                     </Typography>
                </Grid>

                <Grid item xs={8}>
                    <Typography variant="body1" > 
                        <b>Email:</b>  {targetEmployee?.contactInfo.email} 
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <TextField 
                    label="Name*:" 
                    variant='filled'
                    type="text" 
                    size="small"
                    fullWidth
                    { ...register("name", {
                        required: "This field is required",
                        validate: validations.isNameOrLastName,
                    })}
                    error={!!errors.name}
                    helperText={ errors.name?.message }
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="Last name*:"     
                        variant='filled'
                        type="text" 
                        size="small"
                        fullWidth 
                        { ...register("lastName", {
                            required: "This field is required",
                            validate: validations.isNameOrLastName,
                        })}
                        error={!!errors.lastName}
                        helperText={ errors.lastName?.message }
                    />
                </Grid>

                <Grid item xs={6} my="10px" display="flex" justifyContent="space-between" >
                    <Button  variant="contained" type='submit'> Save </Button>
                    <Button  variant="contained" color="error" onClick={onCancel} > Cancel </Button>
                </Grid>

        </Grid>
  </form>
  )
}
