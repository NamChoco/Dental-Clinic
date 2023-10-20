import { MembersInterface } from "./IMember";
import { DentistsInterface } from "./IDentist";

export interface AppointmentInterface {
  Problem?: string;
  Date?: string;
  Time?: string;

  MemberID?: number;
  Member?: MembersInterface;
  DentistID?: number;
  Dentist?: DentistsInterface;
}
