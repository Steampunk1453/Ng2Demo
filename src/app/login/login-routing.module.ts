import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';

const ROUTES: Routes = [{
    component: LoginComponent,
    path: 'login'
}]

@NgModule({
    exports: [RouterModule],

    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class LoginRoutingModule {}
