import { OccupationsInterface } from "./IOccupation";

export interface MembersInterface {
  Profile: string | undefined;

  ID?: number;
  Username?: string;
  Password?: string;
  Firstname?: string;
  Lastname?: string;
  Email?: string;
  Phone?: string;
  OccupationID?: number;
  Occupations?:  OccupationsInterface;

}