import {FC, useContext} from "react";
import { Grid, Modal , Typography } from "@mui/material";
import "./EditEmployeeModal.css"
import { EditEmployeeForm } from "../EditEmployeeForm/EditEmployeeForm";


interface Props {
  isOpen: boolean;
  onClose: ()=> void; 
}

export const EditEmployeeModal: FC<Props> = ({ isOpen = false, onClose }) => {

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