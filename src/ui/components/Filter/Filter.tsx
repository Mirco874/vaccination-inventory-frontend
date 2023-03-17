import { Box, InputLabel, MenuItem, TextField } from "@mui/material"
import { FC } from "react"
import { FilterOptions } from "../../../interfaces";

interface Props {
    label: string;
    options: FilterOptions[]
}

export const Filter: FC<Props> = ({ label, options }) => {
  return (
  <Box display="flex" flexDirection="column">
    <InputLabel>
        {label}
    </InputLabel>
    <TextField
        select
        variant="outlined"
        size="small"
    >
        {
        options.map(
            (option)=>(
                <MenuItem key={option.key} value={option.key} >
                    {option.value}
                </MenuItem>
        ))
        }
    </TextField>
  </Box>

  )
}
