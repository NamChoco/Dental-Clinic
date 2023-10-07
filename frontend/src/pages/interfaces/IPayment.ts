import { UsersInterface } from "./IUser";

export interface PaymentsInterface {
  ID?: number;
  FirstName?: string;
  Amount?: string;
  UserID?: UsersInterface;
  

}