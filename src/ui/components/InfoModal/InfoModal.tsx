import { Box, Button, Modal, Typography } from "@mui/material";
import { FC} from "react"

import "./InfoModal.css"

type ModalType = "success" | "fail"

interface Props {
    type: ModalType;
    title: string;
    description: string;
    isOpen: boolean;
    handleClose?: ()=> void; 
}

const successRegistrationGif= "https://media.tenor.com/Hw7f-4l0zgEAAAAC/check-green.gif";
const failRegistrationGif= "https://media.tenor.com/Gbp8h-dqDHkAAAAj/error.gif";

export const InfoModal: FC<Props> = ({ type = "success", title, description, isOpen = false, handleClose }) => {

  return (
      <Modal
        open={isOpen}
        onClose={handleClose}
      >
        <Box 
          className="info-modal" 
          display="flex" 
          flexDirection="column" 
          alignItems="center"
          padding="20px"
        >

        <Typography variant="h6" component="h2" > 
          {title} 
        </Typography>

          <Box
            component="img"
            alt={ type === "success"? "registration success" :  "registration fail" }
            src={ type === "success"? successRegistrationGif : failRegistrationGif  }
            height="30%"
            width="30%" 
          />
          <Box m="20px">
            <Typography id="modal-modal-description">
              {description}
            </Typography>
          </Box>

          <Button variant="contained" onClick={handleClose}>
            Accept
          </Button>

        </Box>          
      </Modal>

  )
}
