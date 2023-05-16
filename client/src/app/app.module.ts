import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./_modules/shared.module";
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './layout/header/header.component';
import { InfoCustomerComponent } from './pages/customer/info/info-customer.component';
import { IndexCustomerComponent } from './pages/customer/index/index-customer.component';
import { NewCustomerComponent } from "./pages/customer/new/new-customer.component";
import { ErrorInterceptor } from "./_interceptors/error.interceptor";
import { DatatableComponent } from './pages/shared-components/datatable/datatable.component';
import { ChipsModule } from "primeng/chips";
import { ButtonModule } from "primeng/button";
import { NewInvoiceComponent } from './pages/invoices/new-invoice/new-invoice.component';
import { InfoInvoiceComponent } from './pages/invoices/info-invoice/info-invoice.component';
import { IndexInvoiceComponent } from './pages/invoices/index-invoice/index-invoice.component';
import { InvoiceTemplateComponent } from './pages/invoices/invoice-template/invoice-template.component';
import { FiltersComponent } from './pages/shared-components/searchInput/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    InfoCustomerComponent,
    IndexCustomerComponent,
    NewCustomerComponent,
    DatatableComponent,
    NewInvoiceComponent,
    InfoInvoiceComponent,
    IndexInvoiceComponent,
    InvoiceTemplateComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ChipsModule,
    ButtonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
