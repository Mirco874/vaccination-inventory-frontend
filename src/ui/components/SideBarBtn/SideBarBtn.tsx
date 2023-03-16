import { FC } from "react";

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

interface Props {
    iconElement: React.ReactNode;
    text: string;
    handleClick?: ()=> void;
}

export const SideBarBtn: FC<Props> = ({ iconElement, text, handleClick }) => {
  return (
    <ListItemButton onClick={handleClick} > 
        <ListItemIcon>
            {iconElement}
        </ListItemIcon>
        <ListItemText primary={text} />
    </ListItemButton>
  )
}
