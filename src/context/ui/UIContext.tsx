import { createContext } from 'react';
import { User } from '../../interfaces';

interface ContextProps{
     sidebarMenuOpen: boolean;
     toggleSidebarMenu: () => void;
}

export const UIContext =createContext({} as ContextProps );