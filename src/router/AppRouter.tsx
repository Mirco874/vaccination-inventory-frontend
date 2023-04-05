import { FC } from "react";

import { Routes, Route } from 'react-router-dom'
import { AdministrationPanelRoutes } from "../administrationPanel/routes";
import { AuthRoutes } from "../auth/routes";
import { EmployeePanelRoutes } from "../employeePanel/routes";

export const AppRouter: FC = () => {
    return (
        <>
            <Routes>
                <Route path="/auth/*" element={<AuthRoutes/>} />
                <Route path="/panel/*" element={<AdministrationPanelRoutes/>} />
                <Route path="/*" element={<EmployeePanelRoutes/>} />
            </Routes>
        </>
    )
}
