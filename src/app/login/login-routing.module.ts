import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login.component'
import {PasswordChangeComponent} from "./password-change/password-change.component";
import {PasswordRequestComponent} from "./password-request/password-request.component";
import {LoginPanelComponent} from "./login-panel/login-panel.component";

const ROUTES: Routes = [{
    component: LoginComponent,
    path: 'login',
  children: [
    { path: '', component: LoginPanelComponent},
    { path: 'password/request', component: PasswordRequestComponent},
    { path: 'password/change', component: PasswordChangeComponent},
  ]
}]

@NgModule({
    exports: [RouterModule],

    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class LoginRouter {}
