import { User } from '../../interfaces';
import { EmployeeManagerState } from '../';


type EmployeeManagerAction=
| { type: '[Employee Manager] - set target user', payload: User}
| { type: '[Employee Manager] - open edit modal'}
| { type: '[Employee Manager] - close edit modal'}
| { type: '[Employee Manager] - open delete modal'}
| { type: '[Employee Manager] - close delete modal'}
| { type: '[Employee Manager] - clear target user' }

export const EmployeeManagerReducer = ( state: EmployeeManagerState , action: EmployeeManagerAction ): EmployeeManagerState => {

     switch ( action.type ) {
        case "[Employee Manager] - set target user":
            return { ...state, targetEmployee: action.payload };

        case "[Employee Manager] - open edit modal":
            return { ...state, isOpenEditModal: true };
            
        case "[Employee Manager] - close edit modal":
            return { ...state, isOpenEditModal: false };

        case "[Employee Manager] - open delete modal":
            return { ...state, isOpenDeleteModal: true };
            
        case "[Employee Manager] - close delete modal":
            return { ...state, isOpenDeleteModal: false };
        
        case "[Employee Manager] - clear target user":
            return { ...state, targetEmployee: null}

          default:
               return state;
     }

}