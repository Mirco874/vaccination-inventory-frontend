import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Logout } from '@mui/icons-material';

import { UserContext } from "../../../context";

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

        <img 
          src="https://cdn-icons-png.flaticon.com/512/5181/5181835.png" 
          alt="system logo" 
          height="35" 
          width="35"
        />

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