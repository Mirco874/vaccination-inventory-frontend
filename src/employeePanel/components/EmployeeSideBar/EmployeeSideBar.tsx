import {  Box } from "@mui/material";
import { useNavigate} from "react-router-dom";

export const EmployeeSideBar = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("home");
    }


    return (
            <Box flexDirection="column">


            </Box>
    )
};