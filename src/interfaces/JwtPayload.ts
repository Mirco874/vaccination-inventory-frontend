export interface JwtPayload {
    email: string;
    role: "admin" |  "employee";
}