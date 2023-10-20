import { MembersInterface } from "./IMember";
import { DentistsInterface } from "./IDentist";

export interface AppointmentInterface {
  Problem?: string;
  DateTime?: string;
  Time?: string;

  MemberID?: number;
  Member?: MembersInterface;
  DentistID?: number;
  Dentist?: DentistsInterface;
}
