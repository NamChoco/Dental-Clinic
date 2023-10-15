import { MembersInterface } from "./IMember";
import { ServicesInterface } from "./IService";
export interface PaymentsInterface {
  Upload: string | undefined;
  ID?: number;
  Namecard?: string;
  Namepay?: string;
  Amountpay?: string;
  
  ServiceID?: number;
  Service?:  ServicesInterface;
  Amount?: ServicesInterface; 
  MemberID?: number;
  Member?:  MembersInterface;

}