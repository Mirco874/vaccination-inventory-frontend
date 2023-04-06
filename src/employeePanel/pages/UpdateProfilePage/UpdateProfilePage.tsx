import {useContext, useState} from "react";
import { useForm } from "react-hook-form";

import { Box, Button, TextField, Typography } from "@mui/material";

import { RegisterVaccinationModal } from "../../components/RegisterVaccinationModal/RegisterVaccinationModal";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import { DateSelector } from "../../../ui/components";
import  { Dayjs } from 'dayjs';
import isBetween from "dayjs/plugin/isBetween"
import { UserContext } from "../../../context";
import { put } from "../../../utils/apiMethods";


type FormData = {
  birthdate: Dayjs | null;
  address: string;
  phone: string;
}

const minDate = "1960-01-01";
const maxDate = "2005-01-01";


export const UpdateProfilePage = () => {

  const { user } = useContext(UserContext);

  const initialFormValues = user? {
    birthdate: user.birthDate,
    address: user.address,
    phone: user.phone,
  } : {
    birthdate: null,
    address: "",
    phone: "",
  }

  const { register, handleSubmit, formState: { errors }, setValue, } = useForm<FormData>({ defaultValues: initialFormValues});
  
  const [isRegisterVacModalOpen, setIsRegisterVacModal] = useState(false);
  const handleOpenModal = () => setIsRegisterVacModal(true);
  const handleCloseModal = () => setIsRegisterVacModal(false);

  const onDateChange = (newValue:any) =>{
    setValue("birthdate", newValue)
  }

  const {onBlur, ref} = register('birthdate'); 

  const onSubmitLogin = async ( data: FormData ) => {
   if( data.birthdate?.isValid() && data.birthdate?.isBetween(minDate, maxDate, 'day', '[)') ){
    try {
      const body = {...data, birthDate:data.birthdate.format('DD-MM-YYYY') };
      await put(`/api/v1/employee/${user?.id}/update-additional-information`,body);
    } catch (error) {
      console.log(error)
    }
   }
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      marginTop="10px"
    >

      <Typography 
        variant="h3" 
        component="h1"
        margin="auto"
        marginY="10px"
      > Update profile information</Typography>

          <form 
            className="register-employee-form" 
            noValidate
            onSubmit={ handleSubmit(onSubmitLogin) }
          >
            <Box display="flex"  flexDirection="column" width="40%" margin="auto">

                  <DateSelector 
                    label="Birth date*:"
                    { ...register("birthdate", {
                      required: "This field is required",
                    })}
                    name="birthdate"
                    onBlur={onBlur}
                    onChange={onDateChange}
                    ref={ref}
                    minDate={new Date(minDate)}
                    maxDate={new Date(maxDate)}
                    hasError={!!errors.birthdate}
                    helperText={ errors.address?.message }
                   />
                   
                  <TextField 
                      label="Address*:"
                      variant="outlined"
                      type="text" 
                      { ...register("address", {
                        required: "This field is required",
                      })}
                      error={!!errors.address}
                      helperText={ errors.address?.message }
                  />

                <TextField 
                    label="Phone*:"
                    variant='outlined'
                    type="text" 
                    { ...register("phone", {
                      required: "This field is required",
                    })}
                    error={!!errors.phone}
                    helperText={errors.phone?.message }
                />

                <Button 
                    startIcon={<MedicalInformationIcon/>}
                    type="submit"
                    variant="outlined"
                    color="info"
                    onClick={handleOpenModal}
                > 
                    Add immunization record 
                </Button>

              <Box marginTop="20px">

                  <Button type="submit" variant="contained">
                    Update
                  </Button>

              </Box>
        </Box>
      </form>

      <RegisterVaccinationModal
        isOpen={isRegisterVacModalOpen}
        handleClose={handleCloseModal}
      />  

    </Box>
  )
}
