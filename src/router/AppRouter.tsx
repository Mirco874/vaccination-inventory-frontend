import { FC } from "react";

import { Routes, Route } from 'react-router-dom'
import { AuthRoutes } from "../auth/routes";


export const AppRouter: FC = () => {
    return (
        <>
            <Routes>
                <Route path='/auth/*' element={<AuthRoutes/>} />
            </Routes>
        </>
    )
}
