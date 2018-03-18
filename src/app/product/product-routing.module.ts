import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';

const ROUTES: Routes = [{
    component: ProductComponent,
    path: 'product',
    children: [
    { path: 'list', component: ListComponent},
    { path: 'detail/:id', component: DetailComponent}
  ]
}]

@NgModule({
    exports: [RouterModule],

    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class ProductRoutingModule {}
