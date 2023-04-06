import { createContext } from 'react';
import { User } from '../../interfaces';

interface ContextProps{
    targetEmployee: any;
    isOpenEditModal: boolean;
    isOpenDeleteModal: boolean;
    setTargetEmployee: (employee: User) => void;
    clearTargetEmployee: () => void;
    onOpenEditModal: () => void;
    onCloseEditModal: () => void;
    onOpenDeleteModal: () => void;
    onCloseDeleteModal: () => void;
}

export const EmployeeManagerContext =createContext({} as ContextProps );