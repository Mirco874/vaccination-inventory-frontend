import { FC } from "react";

import { Routes, Route } from 'react-router-dom'
import { AdministrationPanel } from "../administrationPanel/routes";
import { AuthRoutes } from "../auth/routes";



export const AppRouter: FC = () => {
    return (
        <>
            <Routes>
                <Route path="/auth/*" element={<AuthRoutes/>} />
                <Route path="/panel/*" element={<AdministrationPanel/>} />
            </Routes>
        </>
    )
}
