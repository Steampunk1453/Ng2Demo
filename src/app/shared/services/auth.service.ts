import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  private islogin: boolean = false;

  login(): void {
    this.islogin = true;
  }

  logout(): void {
    this.islogin = false;
  }

  checkLogged(): boolean {
    return this.islogin
  }
}
