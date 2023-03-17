import { Grid, InputLabel, TextField } from '@mui/material'

export const FilterDateRange = () => {
  return (
        <Grid container spacing={2}>

            <Grid item>
                <InputLabel>
                    Start date:
                </InputLabel>

                <TextField
                    variant="outlined"
                    size="small"
                    id="date"
                    type="date"
                />
            </Grid>

            <Grid item>
                <InputLabel>
                    End date:
                </InputLabel>
                <TextField
                    id="date"
                    type="date"
                    variant="outlined"
                    size="small"
                />
            </Grid>

        </Grid>
  )
}
