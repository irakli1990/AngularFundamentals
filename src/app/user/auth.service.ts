import { Injectable } from "@angular/core";
import { IUser } from "./user.model"



@Injectable()
export class AuthService {
  cuerrentUser: IUser
  loginUser(userName: string, password: string) {
    this.cuerrentUser = {
      id: 1,
      firstName: 'Irakli',
      lastName: 'Kardava',
      userName: userName
    }
  }
  isAuthenticated() {
    return !!this.cuerrentUser;
  }
  updateUser(firstName: string, lastName: string) {
    this.cuerrentUser.firstName = firstName
    this.cuerrentUser.lastName = lastName

  }

}
