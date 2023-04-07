import {  Box, Divider, Typography } from "@mui/material";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { ProfileMenuItem, SideBarItem } from "../../../ui/components";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

export const EmployeeSideBar = () => {

    return (
        <Sidebar 
        backgroundColor="white" 
        width="100%"
        style={{height: "100vh"}}
        >   
            <Menu>

                <ProfileMenuItem role="Employee"/>
                
                <Divider/>

            <SideBarItem
                title="Home"
                to="/"
                icon={<HomeOutlinedIcon color="info"/>}
            />

            <SubMenu
                className="submenu-title"       
                label="My Profile"  
                icon={<AccountBoxOutlinedIcon color="info" />} 
            >   
                <Box >
                <Divider/>
                    <SideBarItem
                        title="My information"
                        to="/watch-profile"
                        icon={<BadgeOutlinedIcon color="info" />}
                    />

                    <SideBarItem
                        title="Edit Information"
                        to="/update-profile"
                        icon={<BorderColorOutlinedIcon color="info" />}
                    /> 
                <Divider/> 
                </Box>
            </SubMenu>

            </Menu>
        </Sidebar>
    )
};