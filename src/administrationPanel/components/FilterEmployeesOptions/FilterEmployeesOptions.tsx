import { useContext } from "react"
import { Grid } from '@mui/material'

import { FilterOptions } from '../../../interfaces'
import { FilterDateRange } from '../../../ui/components'
import { Filter } from '../../../ui/components/Filter/Filter'
import { FilterContext } from "../../../context"
import { vaccineFilterOptions, vaccineStatusFilterOptions } from "../../../data"

export const FilterEmployeesOptions = () => {
    const { vaccinationState, 
            vaccineType, 
            updateVaccineState, 
            updateVaccineType } = useContext(FilterContext)
        
  return (
    <Grid container spacing={2} margin="auto">
            <Grid item xs={11} sm={5} md={2} >
                <Filter 
                    label='Vaccination state:' 
                    options={    vaccineFilterOptions      } 
                    value={vaccinationState}  
                    onValueChange={updateVaccineState}
                />
            </Grid>
            <Grid item xs={11} sm={6} md={2}  >
                <Filter 
                    label='vaccine type:' 
                    options={vaccineStatusFilterOptions} 
                    value={vaccineType}
                    onValueChange={updateVaccineType}
                />
            </Grid>
            <Grid item xs={11} sm={12} md={7} >
                <FilterDateRange />
            </Grid>
    </Grid>

  )
}
