import { AdminInterface } from "./IAdmin";
import { GendersInterface } from "./IGender";
export interface DentistsInterface {
    ID?: number;
    Username?: string;
    Password?: string;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    Birthday?: string;
    Phone_number?: string;
    
    AdminID?: number;
    Admin?: AdminInterface;

    GenderID?: number;
    Gender?: GendersInterface;
}