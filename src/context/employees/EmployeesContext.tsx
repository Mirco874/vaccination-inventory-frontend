import { createContext } from 'react';
import { Employee} from '../../interfaces';

interface ContextProps{
    totalEmployees: Employee[];
    filteredEmployees: Employee[];
    loadEmployees: () => Promise<void>;
    removeEmployee: (employeeId: number) => Promise<void>;
    updateEmployee: (employeeId: number, updateEmployeeBody: any) => Promise<void>;   
    filterEmployee: (vaccinationState: string | number, vaccineType: number, startDate: string, endDate: string) => Promise<void>
}

export const EmployeesContext =createContext({} as ContextProps );