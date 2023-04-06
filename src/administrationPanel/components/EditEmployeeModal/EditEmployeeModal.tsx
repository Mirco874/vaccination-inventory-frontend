import {FC, useContext} from "react";
import { Grid, Modal , Typography } from "@mui/material";
import "./EditEmployeeModal.css"
import { EditEmployeeForm } from "../EditEmployeeForm/EditEmployeeForm";
import { User } from "../../../interfaces";
import { EmployeeManagerContext } from "../../../context";

interface Props {
  isOpen: boolean;
  onClose: ()=> void; 
}

export const EditEmployeeModal: FC<Props> = ({ isOpen = false, onClose }) => {

  const {targetEmployee} = useContext(EmployeeManagerContext);

  return (
      <Modal
      open={isOpen}
      onClose={onClose}
    >

        <Grid container 
          className="edit-employee-modal" 
          width="400px"
          padding="20px"
          spacing={1}
        >
        
        <Typography variant="h3" margin="auto"> Edit Employee information</Typography>

        <EditEmployeeForm onCancel={onClose}/>

      </Grid>

  </Modal>
  )
}