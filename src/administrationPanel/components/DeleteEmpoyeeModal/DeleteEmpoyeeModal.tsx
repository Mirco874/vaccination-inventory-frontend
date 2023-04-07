import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Button, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useContext } from "react";
import { EmployeeManagerContext, EmployeesContext } from "../../../context";
import { remove } from "../../../utils/apiMethods";
import "./DeleteEmpoyeeModal.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const DeleteEmpoyeeModal: FC<Props> = ({ isOpen, onClose }) => {
  const { targetEmployee, clearTargetEmployee } = useContext(EmployeeManagerContext);
  const { loadEmployees } = useContext(EmployeesContext);

  const onDeleteUser = async () => {
    try {
      await remove(`api/v1/employee/${targetEmployee.id}`);
      clearTargetEmployee();
      onClose();
      loadEmployees();
    } catch (error) {
      alert("Internal server error");
    }
  };

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <Grid
          container
          className="delete-employee-modal"
          width="400px"
          padding="20px"
          spacing={2}
        >
          {targetEmployee && (
            <>
              <ErrorOutlineIcon color="error" />
              <Typography variant="h5" component="h2">
                Do you really want to delete:
                {targetEmployee.basicInfo.name} {targetEmployee.basicInfo.lastName}? 
              </Typography>
            </>
          )}

          <Box
            display="flex"
            flexDirection="row"
            marginTop="20px"
            width="45%"
            justifyContent="space-between"
          >
            <Button variant="contained" size="small" onClick={onDeleteUser}>
              Accept
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={onClose}
              size="small"
            >
              Cancel
            </Button>
          </Box>
        </Grid>
      </Modal>
    </>
  );
};
