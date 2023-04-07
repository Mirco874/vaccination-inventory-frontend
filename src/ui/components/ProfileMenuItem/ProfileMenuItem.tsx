import { useContext, FC } from 'react';
import { MenuItem } from 'react-pro-sidebar';

import { Typography } from '@mui/material';

import { UserContext } from '../../../context';

import "./ProfileMenuItem.css";

interface Props {
  role: string
}

export const ProfileMenuItem: FC<Props> = ({role}) => {

  const { user } = useContext(UserContext);

  return (
    <MenuItem className="user-data">
        <Typography variant="h5" > <b>{role}</b>  </Typography>
        <Typography variant="h6" >{user?.name} {user?.lastName} </Typography>
    </MenuItem>
  )
}
