import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AddOrderComponent} from "./order/add/add-order.component";
import { ListOrderComponent } from './order/list/list-order.component';
import { CardOrderComponent } from './order/card-order/card-order.component';
import { LoginComponent } from './common/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: CardOrderComponent},
  {path: 'list-orders', component: ListOrderComponent},
  {path: 'add-order', component: AddOrderComponent},
  {path: 'orders/:id', component: AddOrderComponent },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
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
