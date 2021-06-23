import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AddOrderComponent} from "./order/add/add-order.component";
import { ListOrderComponent } from './order/list/list-order/list-order.component';

const routes: Routes = [
  {path: '', component: ListOrderComponent},
  {path: 'list-orders', redirectTo: '/', pathMatch: 'full'},
  {path: 'add-order', component: AddOrderComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
