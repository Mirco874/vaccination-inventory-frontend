import { Logout } from '@mui/icons-material';
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../context";
import { Link, useNavigate } from 'react-router-dom';

import "./NavBar.css"

export const NavBar = () => {
  
  const navigate = useNavigate();
  const { removeUserData } = useContext(UserContext);

  const onLogout = () =>{
    removeUserData();

    setTimeout(() => {
      navigate("/auth/login");
    }, 500);
}

  return (
    <AppBar position="sticky">
      <Toolbar >

        <Typography mr="20px" variant="h4" >
          Manager App
        </Typography>

        <Box flex={1} />

        <Button
          variant="contained"
          color="error"
          startIcon={<Logout />}
          onClick={onLogout}
        >
            Logout
        </Button>

      </Toolbar>
    </AppBar>
  )
}