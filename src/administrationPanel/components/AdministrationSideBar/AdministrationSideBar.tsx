import { Box, Divider } from "@mui/material";
import { Menu, Sidebar, SubMenu } from "react-pro-sidebar";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';

import { ProfileMenuItem, SideBarItem } from "../../../ui/components";
import "./AdministrationSideBar.css";


export const AdministrationSideBar = () => {
    return ( 
        <Sidebar 
            width="100%"
            backgroundColor="white" 
            style={{height: "100vh"}}
        >
            <Menu>

            <ProfileMenuItem role="Admin"/>
            
            <Divider/>
            <SideBarItem
              title="Dashboard"
              to="/panel/home"
              icon={<HomeOutlinedIcon color="info"/>}
            />

            <SubMenu
                className="submenu-title"       
                label="Employees"  
                icon={<PersonOutlineOutlinedIcon color="info" />} 
            >   
                <Box >
                <Divider/>
                    <SideBarItem
                        title="Register"
                        to="/panel/register-employee"
                        icon={<PersonAddAltIcon color="info" />}
                    />

                    <SideBarItem
                        title="Review"
                        to="/panel/employees"
                        icon={<TocOutlinedIcon color="info" />}
                    /> 
                <Divider/> 
                </Box>
            </SubMenu>

        </Menu>
        </Sidebar>
    )
};