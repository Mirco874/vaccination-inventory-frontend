import {useState} from "react";
import { useForm } from "react-hook-form";

import { Box, 
        Button, 
        Grid, 
        InputLabel, 
        TextField, 
        ToggleButton, 
        ToggleButtonGroup, 
        Typography } from "@mui/material";

import { InfoModal } from "../../../ui/components";
import { FilterOptions } from "../../../interfaces";


type FormData = {
  birthdate: string;
  address: string;
  phone: string;
  vaccinationState: boolean;
  vaccineType: string;
  vaccinationDate: string;
  numberOfDoses: number;
}

const initialFormValues = {
  birthdate: "",
  address: "",
  phone: "",
  vaccinationState: false,
  vaccineType: "",
  vaccinationDate: "",
  numberOfDoses: 1
}

const vaccinationTypeOptions: FilterOptions[] = [
  {
      key: "",
      value: "None"
  },
  {
      key: "0",
      value: "Sputnik"
  },
  {
      key: "1",
      value: "AstraZeneca"
  },
  {
      key: "2",
      value: "Pfizer"
  },
  {
      key: "3",
      value: " Jhonson&Jhonson"
  }
]


export const UpdateProfilePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues: initialFormValues});
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const onSubmitLogin = ( data: FormData ) => {
      console.log(data)
      handleOpenModal();
  }

  const [isVaccinated, setIsVaccinated] = useState(false);

  const handleChange = ( event: React.MouseEvent<HTMLElement>, newState: boolean) => {
    setIsVaccinated(newState);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      marginTop="10px"
    >
      <Typography 
        variant="h4" 
        component="h1"
        margin="auto"
        marginY="10px"
      > Update profile information</Typography>

          <form 
            className="register-employee-form" 
            noValidate
            onSubmit={ handleSubmit(onSubmitLogin) }
          >
            
            <Grid 
              container 
              margin="auto"
              justifyContent="center"
              width="50vw"
            >

              <Grid item xs={7}>

                <InputLabel>
                  Birth date*:
                </InputLabel>

                <TextField
                    variant="filled"
                    size="small"
                    type="date"
                    fullWidth
                    { ...register("birthdate", {
                      required: "This field is required",
                    })}
                    error={!!errors.birthdate}
                    helperText={ errors.birthdate?.message }

                    // value={formatDate.dayMonthYearToYearMonthDay(startDate)}
                />
              </Grid>

              <Grid item xs={7}>
                <InputLabel>
                  Address*:
                </InputLabel>
                <TextField 
                fullWidth
                  size="small"
                  variant='filled'
                  placeholder="Address*:" 
                  type="text" 
                  { ...register("address", {
                    required: "This field is required",
                  })}
                  error={!!errors.address}
                  helperText={ errors.address?.message }
                />
              </Grid>

              <Grid item xs={7}>
                <InputLabel>
                  Phone*:
                </InputLabel>
                <TextField 
                  fullWidth
                  size="small"
                  variant='filled'
                  placeholder="Phone*:" 
                  type="text" 
                  { ...register("phone", {
                    required: "This field is required",
                  })}
                  error={!!errors.phone}
                  helperText={ errors.phone?.message }
                />
              </Grid>

              <Grid 
                item 
                xs={7} 
                display="flex" 
                flexDirection="row" 
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography marginRight={10} variant="subtitle1"> Are you vaccinated? </Typography>
                <ToggleButtonGroup 
                  size="small" 
                  value={isVaccinated} 
                  onChange= {handleChange} 
                  exclusive={true}
                >
                  <ToggleButton value={true}>
                    <Typography variant="body1"> Yes </Typography>
                  </ToggleButton>,

                  <ToggleButton value={false}>
                    <Typography> No </Typography>
                  </ToggleButton>,
                </ToggleButtonGroup>
              </Grid>

              {
                isVaccinated ?
                <>

                 <Grid item xs={7} borderTop="1px solid red" marginTop="10px"> 
                <InputLabel>
                  Vaccine type*:
                </InputLabel>


                
                <TextField
                size="small"
                fullWidth 
                  variant='filled'
                  placeholder="Vaccine type*:" 
                  type="text" 
                  { ...register("vaccineType", {
                    required: "This field is required",
                  })}
                  error={!!errors.vaccineType && isVaccinated}
                  helperText={ errors.vaccineType?.message }
                />

                {/* <Filter 
                  label='vaccine type' 
                  options={vaccinationTypeOptions} 
                  value={vaccineType}
                  onValueChange={updateVaccineType}
                /> */}

              </Grid>


              <Grid item xs={7}>
                <InputLabel>
                 Vaccination date*:
                </InputLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type="date"
                  fullWidth 
                  { ...register("vaccinationDate", {
                    required: "This field is required",
                  })}
                  error={!!errors.vaccinationDate && isVaccinated }
                  helperText={ errors.vaccinationDate?.message }
                />
              </Grid>

              <Grid item xs={7}>
                <InputLabel>
                  Number of doses*:
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  variant='filled'
                  placeholder="Number of doses*:" 
                  type="number" 
                  inputProps={{ min:1, max:5 }}
                  { ...register("numberOfDoses", {
                    required: "This field is required",
                  })}
                  error={!!errors.numberOfDoses && isVaccinated}
                  helperText={ errors.numberOfDoses?.message }
                />
              </Grid>
              </>
              :<>
              
              </>

              }
             


              <Grid item xs={7} >
                <Button 
                  variant="contained"
                  type='submit'
                  sx={{marginBlock:"10px"}}
                  >Update
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
