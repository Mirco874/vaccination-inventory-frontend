import { useContext } from "react";

import { Alert, AlertTitle, Box, Divider, Grid, Typography } from "@mui/material";

import { UserContext } from "../../../context";
import { RegisterVaccinationForm,UpdateProfileInfoForm } from "../../components";

export const UpdateProfilePage = () => {
  const { user } = useContext(UserContext);

  if (user) {
    return (
      <Grid container spacing={1} height={"100vh"}>
        <Grid item xs={12} sm={6} borderRight={"1px solid #E1E1E1"}>
          <UpdateProfileInfoForm user={user} />
        </Grid>
        
          { user?.vaccinatedState ? 
             (
              <Grid 
                item 
                xs={8} 
                sm={4}
                marginTop="10vh"
                marginX="auto"
                >
                <Alert severity="success">
                  <AlertTitle>Vacciantion information</AlertTitle>
                  <Divider />
                    <Typography variant="body2"><strong> Vaccine type: </strong> { user.vaccineType} </Typography> 
                    <Typography variant="body2"><strong> Vaccination date: </strong> { user.vaccinationDate }</Typography> 
                    <Typography variant="body2"><strong> Doses: </strong> {user.doses}</Typography> 
                </Alert>
              </Grid>
             )
             :(
                <Grid item xs={12} sm={6}>
                  <RegisterVaccinationForm userId={user.id} />
                </Grid>
             
             )
          } 
      </Grid>
    );
  }

  return <Box></Box>;
};
