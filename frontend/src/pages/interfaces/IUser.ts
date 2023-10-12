import { ServicesInterface } from "./IService";

export interface UsersInterface {
  Profile: string | undefined;

  ID?: number;
  FirstName?: string;
  LastName?: string;
  Email?: string;
  Phone?: string;
  ServicesID?: number;
  Services?:  ServicesInterface;
  Amount?: ServicesInterface;
  Amountpay?:   string
}