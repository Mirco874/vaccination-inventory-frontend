import { Grid } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import { NavBar, Sidebar } from "../../ui/components"
import { RegisterEmployeePage } from "../pages"

export const AdministrationPanel = () => {
  return (
    <>      
        <NavBar/>
        <Grid container >
          <Grid item xs={12} sm={4} md={2.2}>
            <Sidebar/>  
          </Grid>
          <Grid item xs={12} sm={8} md={9.8}>
            <Routes>
                <Route path="/register-employee" element={<RegisterEmployeePage/>}  />
            </Routes>
          </Grid>
        </Grid>
    </>
  )
}
