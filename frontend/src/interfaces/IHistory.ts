import { DentistsInterface } from "./IDentist";
import { GendersInterface } from "./IGender";
import {ServicesInterface } from "./IService";
import {MembersInterface } from "./IMember";

export interface HistoryInterface {
  ID?: number;
  FirstName?: string;
  LastName?: string;
  Date?: string;
  Gender?: GendersInterface;
  Service?: ServicesInterface ;
  Member?: MembersInterface ;
  Dentist?: DentistsInterface; 
}
