import { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { UserContext } from "../../../context";
import {
  RegisterVaccinationForm,
  UpdateProfileInfoForm,
} from "../../components";

export const UpdateProfilePage = () => {
  const { user } = useContext(UserContext);

  if (user) {
    return (
      <Grid container spacing={1} height={"100vh"}>
        <Grid item xs={12} sm={6} borderRight={"1px solid #E1E1E1"}>
          <UpdateProfileInfoForm user={user} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RegisterVaccinationForm userId={user.id} />
        </Grid>
      </Grid>
    );
  }

  return <Box></Box>;
};
