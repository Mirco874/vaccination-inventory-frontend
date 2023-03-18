import { employeesApi } from "../api";

export const post =  async( path: string, body: any ) => {
    const token=localStorage.getItem("token") || "";
    const headers={
        headers:{ 
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token},
    }

    const response= await employeesApi.post(path, body, headers );

    return response;
}

export const get =  async( path: string ) => {
    const token=localStorage.getItem("token") || "";
    const headers={
        headers:{ 
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token},
    }

    const response= await employeesApi.get(path, headers );

    return response;
}


export const patch =  async( path: string, body: any ) => {
    const token=localStorage.getItem("token") || "";
    const headers={
        headers:{ 
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token},
    }

    const response= await employeesApi.patch(path, body, headers );

    return response;
}




