import { useContext } from "react"
import { Grid } from '@mui/material'
import { FilterOptions } from '../../../interfaces'
import { FilterDateRange } from '../../../ui/components'
import { Filter } from '../../../ui/components/Filter/Filter'
import { FilterContext } from "../../../context"

const vaccinationStatusOptions: FilterOptions[] = [
    {
        key: "",
        value: "None"
    },
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
        key: "",
        value: "None"
    },
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
    const { vaccinationState, 
            vaccineType, 
            updateVaccineState, 
            updateVaccineType } = useContext(FilterContext)
        
  return (
    <Grid container spacing={2}>
            <Grid item xs={11} sm={5} md={2}>
                <Filter 
                    label='Vaccination state' 
                    options={vaccinationStatusOptions} 
                    value={vaccinationState}  
                    onValueChange={updateVaccineState}
                    />
            </Grid>
            <Grid item xs={11} sm={6} md={2}>
                <Filter 
                    label='vaccine type' 
                    options={vaccinationTypeOptions} 
                    value={vaccineType}
                    onValueChange={updateVaccineType}
                />
            </Grid>
            <Grid item xs={11} sm={12} md={7}>
                <FilterDateRange />
            </Grid>
    </Grid>

  )
}
