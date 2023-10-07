import { GendersInterface } from "./IGender";

export interface MembersInterface {
  ID?: number;
  FirstName?: string;
  LastName?: string;
  Email?: string;
  Phone?: string;
  GenderID?: number;
  Gender?: GendersInterface;
}
  