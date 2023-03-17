import { Accordion, AccordionDetails, AccordionSummary, Box, Divider,  List, ListItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SideBarBtn } from "../";

export const Sidebar = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("home");
    }

    const goToRegisterEmployee = () => {
        navigate("register-employee");
    }

    const goToReviewEmployees = () => {
        navigate("employees");    
    }

    return (
            <Box flexDirection="column" >
                    <Box 
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        ml="10px"
                        my="10px"
                    >
                        <Typography variant="h6"> Admin panel</Typography>
                        <Typography variant="body1"> Mirco Pilco Peralta</Typography>
                        
                    </Box>
                    <Divider />
                        <List  >
                            <ListItem >
                                <SideBarBtn 
                                    iconElement={<HomeOutlinedIcon/>} 
                                    text={"Home"}  
                                    handleClick={goToHome}
                                />
                            </ListItem>

                            <ListItem disablePadding>
                            <Accordion sx={{width: "100%"}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                    <SideBarBtn 
                                        iconElement={<PersonOutlineOutlinedIcon/>} 
                                        text={"Employees"}  
                                    />
                                </AccordionSummary>
                                <AccordionDetails>
                                    <SideBarBtn 
                                        iconElement={<PersonAddAltOutlinedIcon/>} 
                                        text={"Register employee"}
                                        handleClick={goToRegisterEmployee}  
                                    />
                                    <SideBarBtn 
                                        iconElement={<TocOutlinedIcon/>} 
                                        text={"review registered employees"} 
                                        handleClick={goToReviewEmployees} 
                                    />
                                </AccordionDetails>
                            </Accordion>
                            </ListItem>
                        </List>

            </Box>
    )
};