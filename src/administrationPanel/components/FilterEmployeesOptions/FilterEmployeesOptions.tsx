import { Grid } from '@mui/material'
import { FilterOptions } from '../../../interfaces'
import { FilterDateRange } from '../../../ui/components'
import { Filter } from '../../../ui/components/Filter/Filter'

const vaccinationStatusOptions: FilterOptions[] = [
    {
        key: "true",
        value: "Vaccinated"
    },
    {
        key: "false",
        value: "Not vaccinated"
    }
]

const vaccinationTypeOptions: FilterOptions[] = [
    {
        key: "0",
        value: "Sputnik"
    },
    {
        key: "1",
        value: "AstraZeneca"
    },
    {
        key: "2",
        value: "Pfizer"
    },
    {
        key: "3",
        value: " Jhonson&Jhonson"
    }
]
export const FilterEmployeesOptions = () => {
  return (
    <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
                <Filter label='Vaccination state' options={vaccinationStatusOptions}  />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Filter label='vaccine type' options={vaccinationTypeOptions} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FilterDateRange/>
            </Grid>
    </Grid>

  )
}
