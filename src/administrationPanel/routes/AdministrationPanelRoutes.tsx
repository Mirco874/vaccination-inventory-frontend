import { Grid } from "@mui/material"
import { Routes, Route, useNavigate } from "react-router-dom"
import { NavBar } from "../../ui/components"
import { RegisterEmployeePage, ReviewEmployeesPage } from "../pages"
import { AdministrationSideBar } from "../components";
import { useCallback, useContext, useEffect } from "react";
import { existUserLogged } from "../../utils/apiMethods";
import { decodeJWT } from "../../utils";
import { EmployeesContext } from "../../context";

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
