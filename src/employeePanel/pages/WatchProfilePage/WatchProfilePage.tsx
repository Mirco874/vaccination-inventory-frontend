import { useContext } from "react";

import { Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material";

import { UserContext } from "../../../context";

import { MissingInformationWarning, UserPhoto, UserProfileInformation } from "../../components";

import "./WatchProfilePage.css";

export const WatchProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Typography variant="h3" component="h1" margin="auto" marginY="10px">
        My Profile
      </Typography>

    {
        !user?.address &&
        <MissingInformationWarning />
    }

      <Card className="profile-card">
        <CardContent>
          <Grid container>

            <Grid xs={12} sm={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <UserPhoto/>

                <Typography variant="h2"> {user?.name} {user?.lastName} </Typography>
                <Typography variant="body1"> {user?.identityCard} </Typography>

              </Box>
            </Grid>

            <Grid xs={12} sm={8}>
              <Typography variant="h3">Profile information</Typography>
              <Divider />
              <UserProfileInformation user={user} />  
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
