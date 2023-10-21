import { OccupationInterface } from "./IOccupation";
import { AdminInterface } from "./IAdmin";
import { GendersInterface } from "./IGender";

export interface MembersInterface {
    ID?: number;
    Username?: string;
    Password?: string;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    Birthday?: string;
    Phone_number?: string;

    OccupationID?: number;
    Occupation?: OccupationInterface;

    GenderID?: number;
    Gender?: GendersInterface;

    AdminID?: number
    Admin?: AdminInterface;
}