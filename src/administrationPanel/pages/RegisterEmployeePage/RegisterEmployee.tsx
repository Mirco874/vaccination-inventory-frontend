import { Button, Grid, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { validations } from "../../../utils";

import {useState} from "react";
import { InfoModal } from "../../../ui/components";

type FormData = {
  identityCard: string;
  name: string;
  lastName: string;
  email: string;
}

const initialFormValues = {
  identityCard: "",
  name: "",
  lastName: "",
  email: "",
}

export const RegisterEmployeePage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues: initialFormValues});
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const onSubmitLogin = ( data: FormData ) => {
      console.log(data)
      handleOpenModal();
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography 
        variant="h4" 
        component="h1"
        margin="auto"
        marginY="10px"
      > Register employee form</Typography>

          <form 
            className="register-employee-form" 
            noValidate
            onSubmit={ handleSubmit(onSubmitLogin) }
          >
            <Grid container justifyContent="center" >
              <Grid item xs={7}>

                <InputLabel>
                  Identity card*:
                </InputLabel>
                <TextField 
                  variant='filled'
                  placeholder="Identity card*:"
                  type="text" 
                  { ...register("identityCard", {
                    required: "This field is required",
                    validate: validations.isIdentityCard,
                    maxLength: { value: 10, message: 'The identity card must contain ten characters' },
                    minLength: { value: 10, message: 'The identity card must contain ten characters' }
                  })}
                  error={!!errors.identityCard}
                  helperText={ errors.identityCard?.message }
                  fullWidth
                />
              </Grid>

              <Grid item xs={7}>
                <InputLabel>
                  Email*:
                </InputLabel>
                <TextField 
                  fullWidth
                  variant='filled'
                  placeholder="Email*:" 
                  type="email" 
                  { ...register("email", {
                    required: "This field is required",
                    validate: validations.isEmail,
                  })}
                  error={!!errors.email}
                  helperText={ errors.email?.message }
                />
              </Grid>

              <Grid item xs={7}>
                <InputLabel>
                  Name*:
                </InputLabel>
                <TextField 
                  fullWidth
                  variant='filled'
                  placeholder="Name*:" 
                  type="text" 
                  { ...register("name", {
                    required: "This field is required",
                    validate: validations.isNameOrLastName,
                  })}
                  error={!!errors.name}
                  helperText={ errors.name?.message }
                />
              </Grid>

              <Grid item xs={7}>
                <InputLabel>
                  Last name*:
                </InputLabel>
                <TextField
                fullWidth 
                  variant='filled'
                  placeholder="Last name*:" 
                  type="text" 
                  { ...register("lastName", {
                    required: "This field is required",
                    validate: validations.isNameOrLastName,
                  })}
                  error={!!errors.lastName}
                  helperText={ errors.lastName?.message }
                />
              </Grid>


              <Grid item xs={7} >
                <Button 
                  variant="contained"
                  type='submit'
                  sx={{marginBlock:"10px"}}
                  >Register
                </Button>
              </Grid>

            </Grid>
           
          </form>

      <InfoModal 
        type="success"
        title="Registro exitoso!"
        description="las nuevas credenciales son:"
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
      />

    </Box>
  )

}
