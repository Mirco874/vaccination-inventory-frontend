import {useState} from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { InfoModal } from "../../../ui/components";
import { RegisterEmployeeForm } from "../../components";

export const RegisterEmployeePage = () => {
  const [registerState, setRegisterState] = useState();
  const [registerDescription, setRegisterDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onOpenModal = () => setIsModalOpen(true);
  const onCloseModal = () => setIsModalOpen(false);

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography 
        variant="h2" 
        component="h1"
        margin="auto"
        marginY="10px"
      > Register employee form</Typography>

      <RegisterEmployeeForm onSubmit={onOpenModal} />

      <InfoModal 
        success={registerState}
        description={registerDescription}
        isOpen={isModalOpen}
        handleClose={onCloseModal}
      />

    </Box>
  )

}
