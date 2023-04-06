import { FC, useContext } from "react";

import { Box, Button, Divider } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { User } from "../../../interfaces";
import { EmployeeManagerContext } from "../../../context";


interface Props{
    employee: any
}

export const EmployeOptions: FC<Props> = ({ employee }) => {
  const { setTargetEmployee, onOpenEditModal, onOpenDeleteModal } = useContext(EmployeeManagerContext);

  const openEditModal = () => {
    setTargetEmployee(employee);
    onOpenEditModal();
  }

  const openDeleteModal = () => {
    setTargetEmployee(employee);
    onOpenDeleteModal();
  }

  return (
    <Box display="flex" flexDirection="column" alignContent="space-between">
        <Button 
            size="small" 
            variant="contained"
            startIcon={<EditOutlinedIcon/>}
            onClick={openEditModal}
        > 
            Edit 
        </Button>

        <Divider></Divider>
    <Button 
        size="small" 
        variant="contained" 
        color="error" 
        startIcon={<DeleteOutlineOutlinedIcon/>}
        onClick={openDeleteModal}
    > 
        Remove 
    </Button>
    </Box>
  )
}
