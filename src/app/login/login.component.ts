import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title = 'Welcome to the Cryptocurrencies Shop!';

  constructor(private _authService: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  login() {
    let url : string = 'product/list'
    this._authService.login();
    if(this._authService.checkLogged()) {
      this._router.navigate([url]);
    }
  }

  logout() {
    this._authService.logout();
  }

}
