# Welcome to the aplication: "Manager app"
Manager app is an application dedicated to the administration of the vaccination status of employees.

## Used technologies:
 - **Front End Programming language:** TypeScript
 - **Library:** React
 - **Interface library:** Material UI
 - **HTTP client:** Axios
 - **Backend:** SpringBoot

## Building process:
The development of the front end was carried out using react and typescript due to the advantages that the language offers when it comes to keeping the code understandable for future improvements.
At the beginning of the project, we worked with data in json files and after implementing the backend, Axios was used for communication, in addition, the api methods were built to make requests without rewriting the request headers.
To control the form fields react hook form was used, which allows implementing regular expressions and controlling the values before they are sent. For the interface, UI material was used that facilitates the creation of interfaces that are pleasing to the eye and allows the creation of themes to customize the designs, although on occasions it was decided to import css files when it was necessary to modify specific parts in the components, for the creation of routes and navigation react router dom was used and to protect routes methods were created to validate the tokens and delete them from local storage if they were invalid.

The backend It was developed using springboot and a postgres database, following the hexagonal software architecture, the repository can be found at the link: https://github.com/Mirco874/vaccination-inventory-backend/tree/main
In order for the application to work without having to download two repositories, the backend was uploaded to a server on the Internet using docker for the database and the application separately.
**Note:** the backend can only be used if the application is running on localhost:3000

## Features:

In this application an administrator can:
- Add, review, edit and delete employees
- Filter registered users

and employees can:
- Add and edit their contact information
- Add thier vaccination information

## Instalation:
To run this application you should:
 - Download this repository
 - Access application files with a command terminal
 - Run the command: "npm run i" to install the dependencies
 - Before starting the app, you will need to set the environment variables in the **.env** file, to do this rename the file called **.env_template** to **.env**.
 - Modify the variable **REACT_APP_BACKEND_URL** with the url: http://149.28.237.37:8080
 - Modify the variable **REACT_APP_BACKEND_VERIFY_TOKEN_URL** with the url: http://149.28.237.37:8080/api/v1/employee
 - Run the command: "npm run start"

 ## Accounts: 

**email:** admin@gmail.com
**password:** password

**email:** cliente1@gmail.com
**password:** 6Tbf1qbSs4

**email:** cliente2@gmail.com
**password:** AQFkYA3jmb

**email:** cliente3@gmail.com
**password:** 75VweNqJ5s

**email:**  cliente4@gmail.com
**password:** rXVtLbyE1K
