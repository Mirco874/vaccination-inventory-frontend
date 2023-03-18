import { useForm } from "react-hook-form";

import { Box, Button, Grid, TextField, Typography } from '@mui/material';

import { validations } from "../../../utils";
import "./LoginPage.css"

type FormData = {
  email: string,
  password: string,
};

const initialFormValues: FormData = {
  email: "",
  password: ""
}

export const LoginPage = () => {

const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues: initialFormValues});

 const onSubmitLogin = ( data: FormData ) => {
      console.log(data)
 }

  return (
    <Grid 
      container
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} sm={8} md={6} >
        <Box 
          display=" flex"
          boxShadow={1}
          flexDirection="column"
          alignItems="center"
          padding="50px"
        >
          <Typography variant="h2"> Login </Typography>

          <form 
            className="login-form" 
            noValidate
            onSubmit={ handleSubmit(onSubmitLogin) }
          >

            <TextField 
              variant='filled'
              placeholder="Email" 
              type="email" 
              size="small"
              { ...register("email", {
                required: "This field is required",
                validate: validations.isEmail
              })}
              error={!!errors.email}
              helperText={ errors.email?.message }
            />

            <TextField 
              variant='filled'
              placeholder="Password" 
              type="password" 
              size="small"
              { ...register("password", {
                required: "This field is required",
              })}
              error={!!errors.password}
              helperText={ errors.password?.message }
            />

            <Button 
              variant="contained"
              type='submit'
            >sign in</Button>

          </form>
        </Box>
      </Grid>
    </Grid>
  )
}
