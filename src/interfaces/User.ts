export interface User {
    id: number;
    name: string;
    lastName: string;
    identityCard: number; 
    email: string;
    birthDate: string;    //ToDo: check type
    address: string;
    phone: string;
    vaccinatedState: vaccinatedState;
    vaccineType: vaccineType;
    vaccinationDate: string | null;  //ToDo: check type
    doses: number | null;
}
export type vaccinatedState = string | -1;

export type vaccineType = "Sputnik" | "AstraZeneca" | "Pfizer" | "Jhonson&Jhonson" | -1;