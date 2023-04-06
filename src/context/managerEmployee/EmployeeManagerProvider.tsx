import { FC, useReducer } from 'react';
import { User } from '../../interfaces';
import { EmployeeManagerContext, EmployeeManagerReducer } from '..';

export interface EmployeeManagerState {
    targetEmployee: any;
    isOpenEditModal: boolean;
    isOpenDeleteModal: boolean;
}

const EMPLOYEE_MANAGER_INITIAL_STATE: EmployeeManagerState={
    targetEmployee: null,
    isOpenEditModal: false,
    isOpenDeleteModal: false,
}

interface Props{
     children: React.ReactNode
}

export const EmployeeManagerProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( EmployeeManagerReducer, EMPLOYEE_MANAGER_INITIAL_STATE );

    const onOpenEditModal = () => {
        dispatch({ type: "[Employee Manager] - open edit modal" });
    }

    const onCloseEditModal = () => {
        dispatch({ type: "[Employee Manager] - close edit modal" });
    }

    const onOpenDeleteModal = () => {
        dispatch({ type: "[Employee Manager] - open delete modal" });
    }

    const onCloseDeleteModal = () => {
        dispatch({ type: "[Employee Manager] - close delete modal" }); 
    }

    const setTargetEmployee = (employee: User) =>{
        dispatch({ type: "[Employee Manager] - set target user", payload: employee }); 
    }
    const clearTargetEmployee = () =>{
        dispatch({ type: "[Employee Manager] - clear target user"}); 
    }


    return (
        <EmployeeManagerContext.Provider value={{ 
            ...state,
            setTargetEmployee,
            clearTargetEmployee,
            onOpenEditModal,
            onCloseEditModal,
            onOpenDeleteModal,
            onCloseDeleteModal
            }} 
        >
            {children}
        </EmployeeManagerContext.Provider>
    )
}