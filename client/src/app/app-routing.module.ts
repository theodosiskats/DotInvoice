import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {InfoCustomerComponent} from "./pages/customer/info/info-customer.component";
import {IndexCustomerComponent} from "./pages/customer/index/index-customer.component";
import {NewCustomerComponent} from "./pages/customer/new/new-customer.component";
import {InfoInvoiceComponent} from "./pages/invoices/info-invoice/info-invoice.component";
import {NewInvoiceComponent} from "./pages/invoices/new-invoice/new-invoice.component";
import {IndexInvoiceComponent} from "./pages/invoices/index-invoice/index-invoice.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'customer', component: IndexCustomerComponent},
  {path: 'customer/new', component: NewCustomerComponent},
  {path: 'customer/:id', component: InfoCustomerComponent},
  {path: 'invoice', component: IndexInvoiceComponent},
  {path: 'invoice/new', component: NewInvoiceComponent},
  {path: 'invoice/:id', component: InfoInvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
