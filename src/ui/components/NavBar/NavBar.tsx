import { AppBar, Toolbar, Typography } from "@mui/material";

export const NavBar= () => {

  return (
    <AppBar position="sticky">
        <Toolbar >
            <Typography mr="20px" variant="h4" >
            Manager App
            </Typography>
        </Toolbar>
    </AppBar>
  )
}
