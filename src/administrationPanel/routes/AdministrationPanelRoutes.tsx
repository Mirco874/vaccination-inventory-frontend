import { useCallback, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Grid } from "@mui/material";

import { NavBar } from "../../ui/components";

import { decodeJWT } from "../../utils";
import { existUserLogged } from "../../utils/apiMethods";

import { AdministrationSideBar } from "../components";
import { RegisterEmployeePage, ReviewEmployeesPage } from "../pages";

export const AdministrationPanelRoutes = () => {
  const navigate =useNavigate();

  const verifyUserLogged= useCallback(
    async() =>{
      const isUserLogged = await existUserLogged();
      
      if( !isUserLogged ){
        navigate("/auth/login");
      }

      const { id_rol } = decodeJWT.decodeJWT();
      if(id_rol === 1){
        navigate("/");
      }

  } , [navigate])


  useEffect(()=>{
    verifyUserLogged()
  },[])

  return (
    <>      
        <NavBar />
        <Grid container spacing={1} >
          <Grid item xs={12} sm={3} md={2}>
              <AdministrationSideBar/>  
          </Grid>
          
          <Grid item xs={12} sm={9} md={10}>
            <Routes>
                <Route path="/register-employee" element={<RegisterEmployeePage/>} />
                <Route path="/employees" element={<ReviewEmployeesPage/>} />
            </Routes>
          </Grid>
        </Grid>
    </>
  )
}
