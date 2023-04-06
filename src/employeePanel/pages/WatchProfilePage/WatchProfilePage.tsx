import { useContext, useEffect } from "react";
import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material"
import { UserContext } from "../../../context";
import "./WatchProfilePage.css"

export const WatchProfilePage = () => {
    const { user } = useContext(UserContext);
 
  return (
    <>
        <Typography variant="h3" component="h1" margin="auto" marginY="10px"> My Profile</Typography>

        <Card className="profile-card">
            
        <CardContent>
            <Grid container>
                <Grid xs={12} sm={4}>
                    <Box 
                        display="flex" 
                        flexDirection="column" 
                        alignItems="center"
                    >
                        <CardMedia
                            sx={{maxWidth:200, borderRadius: "100px", margin:"10px"}}
                            component="img"
                            height={200}
                            image="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                            alt="proflie picture"
                        />
                        <Typography variant="h2"> {user?.fullName} </Typography>
                        <Typography variant="body1"> {user?.identityCard} </Typography>

                    </Box>
                </Grid>
                <Grid xs={12} sm={8}>
                        <Typography variant="h3">
                            Profile information
                        </Typography>
                        <Divider/>
                        <Box marginX="5%" marginTop="2%">
                        <Typography variant="subtitle1">
                        <b>Email: </b> {user?.email}
                        </Typography>
                        <Typography variant="subtitle1">
                        <b>Address: </b> {user?.address}
                        </Typography>
                        <Typography variant="subtitle1">
                        <b>phone: </b> {user?.phone}
                        </Typography>
                        <Typography variant="subtitle1">
                        <b>Birthdate: </b> {user?.birthDate} 
                        </Typography>
                        <Typography variant="subtitle1">
                                <b>vaccination status: </b>
                        </Typography>
                        {
                            user?.vaccinatedState ? (
                                <Typography variant="subtitle1">
                                vaccinated with <b>{user?.vaccineType}</b> vaccine since: <b>{user?.vaccinationDate}</b>  
                                </Typography>

                            )
                            :
                            (
                                <Typography variant="subtitle1">
                                Is not vaccinated
                                </Typography>
                            )    
                        }
                    </Box>
                </Grid>
            </Grid>
        </CardContent>
        </Card>
    
    </>
  )
}

