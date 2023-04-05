import { useState, useEffect,useCallback } from 'react'
import { existUserLogged } from '../utils/apiMethods';
import { decodeJWT } from '../utils';

interface sessionData{
    isUserLogged: boolean;
    idRol: null | 0 | 1 ;
}

const initialSesionValues: sessionData = {
    isUserLogged: false,
    idRol: null
}

export const useSession = () => {
    const [sessionInfo, setSessionInfo] = useState<sessionData>(initialSesionValues);

     useEffect(
      ()=>{
        console.log("una vez")
        const verifyUserLogged = async() =>{
            const isUserLogged = await existUserLogged();
            const { id_rol } = decodeJWT.decodeJWT();
    
            setSessionInfo({
                idRol: id_rol,
                isUserLogged: isUserLogged,
            })  
        }

        verifyUserLogged()
      },[]
      )

    return { ...sessionInfo };
    
}
