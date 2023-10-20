import { OccupationInterface } from "./IOccupation";
import { DentistsInterface } from "./IDentist";
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
}