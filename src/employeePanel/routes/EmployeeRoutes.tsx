import {useCallback, useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"

import { NavBar } from "../../ui/components"
import { EmployeeSideBar } from "../components"
import { UpdateProfilePage, WelcomePage } from "../pages"
import { existUserLogged } from "../../utils/apiMethods";
import { decodeJWT } from "../../utils";
 
export const EmployeePanelRoutes = () => {
  const navigate =useNavigate();

  const verifyUserLogged= useCallback(
    async() =>{
      const isUserLogged = await existUserLogged();
      
      if( !isUserLogged ){
        navigate("/auth/login");
      }
      
      const { id_rol } = decodeJWT.decodeJWT();
      if(id_rol === 0){
        navigate("/panel/home");
      }

  } , [])

 useEffect(
  ()=>{
    verifyUserLogged()
  },[verifyUserLogged]
  )

  return (
    <>      
        <NavBar  />
        <Grid container spacing={2} >
          <Grid item xs={12} sm={4} md={2}>
            <EmployeeSideBar/>  
          </Grid>
          <Grid item xs={12} sm={8} md={10}>
            <Routes>
                <Route path="/update-profile" element={<UpdateProfilePage/>} />
                <Route path="/watch-profile" element={<UpdateProfilePage/>} />
                <Route path="/" element={<WelcomePage/>} />
            </Routes>
          </Grid>
        </Grid>
    </>
  )
}
