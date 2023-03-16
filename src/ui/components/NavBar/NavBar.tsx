import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';

export const NavBar = () => {
  return (
    <AppBar 
        position="static"

    >
        <Toolbar 
        >
            <Typography mr="20px" variant="h6" >
                Vaccination Inventory
            </Typography>

            <IconButton
                color="inherit"
                aria-label="menu"
            >
                <MenuIcon />
            </IconButton>

        </Toolbar>
    </AppBar>
  )
}
