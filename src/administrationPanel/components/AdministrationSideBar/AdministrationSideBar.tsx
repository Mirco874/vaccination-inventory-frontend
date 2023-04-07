import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Divider, Typography } from "@mui/material";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { ProfileMenuItem, SideBarItem } from "../../../ui/components";
import "./AdministrationSideBar.css"
import { UserContext } from "../../../context";


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