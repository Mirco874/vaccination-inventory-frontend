import { Box, Grid, Typography } from "@mui/material";

import { DeleteEmpoyeeModal, EditEmployeeModal, EmployeesTable, FilterEmployeesOptions } from "../../components";
import { useContext, useEffect, useState } from "react";
import { EmployeeManagerContext, EmployeesContext } from "../../../context";
import { User } from "../../../interfaces";

export const ReviewEmployeesPage = () => {

  const { loadEmployees } = useContext(EmployeesContext);
  const {isOpenEditModal, isOpenDeleteModal, onCloseEditModal, onCloseDeleteModal} = useContext(EmployeeManagerContext);

  useEffect(() => {
    loadEmployees()
  }, [])
  
  return (
    <Box  >
        <Typography variant='h3' component='h2' my="10px">Employees</Typography>
        <Grid container >
            <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
                <FilterEmployeesOptions/>
                <EmployeesTable/>
            </Grid>
        </Grid>

        <EditEmployeeModal
          isOpen={isOpenEditModal}
          onClose={onCloseEditModal}
        />

        <DeleteEmpoyeeModal
          isOpen={isOpenDeleteModal}
          onClose={onCloseDeleteModal}
        />

    </Box>
  )
}