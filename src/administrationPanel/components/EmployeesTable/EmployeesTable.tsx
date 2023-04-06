import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { useContext } from "react";
import { EmployeOptions, EmployeeBasicInfo, EmployeeContactInfo, EmployeeVacStatus } from "../";
import { EmployeesContext } from "../../../context";
import { Employee, User } from "../../../interfaces";
import "./EmployeesTable.css";


const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    {
        field: "basicInfo",
        headerName: "Basic information",
        width: 170,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <EmployeeBasicInfo
                identityCard={params.row.basicInfo.identityCard}
                fullName={params.row.basicInfo.fullName}
                address={params.row.basicInfo.address}
            />
        )
    },
    {
        field: "contactInfo",
        headerName: "Contact",
        width: 170,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <EmployeeContactInfo
                email={params.row.contactInfo.email}
                phone={params.row.contactInfo.phone}
            />
        )
    },
    {
        field: "vaccinatedState",
        headerName: "Vaccination status",
        width: 140,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <EmployeeVacStatus status={params.row.vaccinatedState} />
        )
    },
    { field: "vaccineType", headerName: "Type of vaccine", width: 140, sortable: false },
    { field: "doses", headerName: "Doses", width: 80, sortable: false },
    { field: "vaccinationDate", headerName: "Vaccination date", width: 130, sortable: false },
    {
        field: "options",
        headerName: "Options",
        width: 120,
        renderCell: (params: GridRenderCellParams) => (
            <EmployeOptions employee={params.row } />
        )
    }
];

export const EmployeesTable = () => {

    const { filteredEmployees } = useContext(EmployeesContext);

    const rows = filteredEmployees.map((employee: Employee) => ({
        id: employee.id,
        basicInfo: {
            fullName: employee.fullName,
            identityCard: employee.identityCard,
            address: employee.address
        },
        contactInfo: {
            email: employee.email,
            phone: employee.phone
        },
        vaccinationStatus: employee.vaccinatedState,
        typeOfVaccine: employee.vaccineType,
        vaccinationDate: employee.vaccinationDate,
        numberOfDoses: employee.doses
    }))

    return (
        <Box className="employees-table">
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 7,
                        },
                    },
                }}
                rowHeight={80}
                pageSizeOptions={[7]}
            />
        </Box>
    )
}