import { Button, Grid, InputLabel, TextField } from '@mui/material'
import {  useContext, ChangeEvent } from 'react';
import { FilterContext } from '../../../context';
import { formatDate } from '../../../utils';

export const FilterDateRange = () => {

    const { startDate, endDate, updateStartDate, updateEndDate, clearRangeDate } = useContext(FilterContext)

    const onUpdateStartDate = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        updateStartDate(formatDate.yearMonthDayToDayMonthYear(value));
    }
    
    const onUpdateEndDate = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        updateEndDate(formatDate.yearMonthDayToDayMonthYear(value));
    }

    return (
        <Grid container spacing={2} >

            <Grid item xs={5} sm={6} md={4}>
                <InputLabel>
                    Start date:
                </InputLabel>
                <TextField
                    variant="outlined"
                    size="small"
                    type="date"
                    onChange={onUpdateStartDate}
                    fullWidth
                    value={formatDate.dayMonthYearToYearMonthDay(startDate)}
                />
            </Grid>

            <Grid item xs={5} sm={6} md={4}>
                <InputLabel>
                    End date:
                </InputLabel>
                <TextField
                    type="date"
                    variant="outlined"
                    size="small"
                    onChange={onUpdateEndDate}
                    fullWidth
                    value={formatDate.dayMonthYearToYearMonthDay(endDate)}
                />
            </Grid>

            <Grid item xs={2} sm={12} md={4} marginTop={"35px"}> 
                <Button
                    variant='contained'
                    onClick={clearRangeDate}
                >
                    clear range
                </Button>
            </Grid>

        </Grid>
  )
}
