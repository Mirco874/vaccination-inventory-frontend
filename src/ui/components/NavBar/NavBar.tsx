import { useProSidebar } from "react-pro-sidebar";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';


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
