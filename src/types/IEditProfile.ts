import { User } from "./Users";

export interface IEditProfile {
  handle: string | undefined;
  users: Partial<User>;
}
