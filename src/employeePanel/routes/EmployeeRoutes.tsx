import { Routes, Route } from "react-router-dom"
import { Grid } from "@mui/material"

import { NavBar } from "../../ui/components"
import { EmployeeSideBar } from "../components"
import { UpdateProfilePage, WelcomePage } from "../pages"

export const EmployeePanelRoutes = () => {
  return (
    <>      
        <NavBar  />
        <Grid container spacing={2} height={"150%"}>
          <Grid item xs={12} sm={4} md={3} sx={{ backgroundColor: "#171d24" }}>
            <EmployeeSideBar/>  
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Routes>
                <Route path="/update-profile" element={<UpdateProfilePage/>} />
                <Route path="/" element={<WelcomePage/>} />
            </Routes>
          </Grid>
        </Grid>
    </>
  )
}
