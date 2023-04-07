import { FC, useCallback, useReducer } from 'react';
import { EmployeesContext, EmployeesReducer } from '../';
import { Employee } from '../../interfaces';
import { apiMethods } from '../../utils';
import { toMs } from '../../utils/formatDate';

export interface EmployeesState {
    totalEmployees: Employee[];
    filteredEmployees: Employee[];
}

const EMPLOYEE_INITIAL_STATE: EmployeesState = {
    totalEmployees: [],
    filteredEmployees: []
}

interface Props {
    children: React.ReactNode
}

export const EmployeesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(EmployeesReducer, EMPLOYEE_INITIAL_STATE);

    const loadEmployees = useCallback(async () => {
        const { data } = await apiMethods.get("/api/v1/employee");
        dispatch({ type: "[Employee] - load employees", payload: data.data });
    }, [])

    const removeEmployee = async (employeeId: number): Promise<void> => {
        await apiMethods.remove(`/api/v1/employee/${employeeId}`);
    }

    const updateEmployee = async (employeeId: number, updateEmployeeBody: any): Promise<void> => {
        await apiMethods.put(`/api/v1/employee/${employeeId}`, updateEmployeeBody);
    }


    const validVaccinationState = ( employee: Employee, vaccinationState: string | number ) => {
        if( vaccinationState === "all" ){
            return true;
        }
        return (employee.vaccinatedState == vaccinationState); 
    }

    const validVaccineType = ( employee: Employee, vaccineType: number ) => {
        if(vaccineType === -1 ){
            return true;
        }
        return (employee.vaccineType == vaccineType);
    }

    const validDateRange = (employee: Employee, startDate: string, endDate: string) => {
        if(startDate === "" && endDate === ""){
            return true;
        }

        return ( startDate !== "" && endDate !== "" && employee.vaccinationDate != null ) 
            && (toMs(employee.vaccinationDate) > toMs(startDate) && toMs(employee.vaccinationDate) < toMs(endDate));
    } 

    const filterEmployee = async (vaccinationState: string | number, vaccineType: number, startDate: string, endDate: string) => {

        if(vaccinationState === "all" && vaccineType ===-1 && startDate === "" && endDate === "" ){
            dispatch({ type: "[Employee] - change filtered employees", payload: state.totalEmployees});
            return;
        }


        let filteredEmployees: Employee[] = [];
        
        state.totalEmployees.forEach(
            (employee: Employee)=> {
                if( validVaccinationState(employee, vaccinationState) && validVaccineType(employee, vaccineType) && validDateRange(employee, startDate, endDate) ){
                    filteredEmployees.push(employee);
                }
            }
        );
        
        dispatch({ type: "[Employee] - change filtered employees", payload: filteredEmployees});
    
    }

    return (
        <EmployeesContext.Provider value={{
            ...state,
            loadEmployees,
            removeEmployee,
            updateEmployee,
            filterEmployee
        }} >
            {children}
        </EmployeesContext.Provider>
    )
}