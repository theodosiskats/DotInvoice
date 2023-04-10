import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../../environments/environment";
import {Customer} from "../_models/customer";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = env.apiUrl
  customer: Customer | undefined
  customers: Customer[] = [];

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllCustomers(){
    return this.httpClient.get<Customer[]>(this.baseUrl + 'customer')
  }

  getCustomer(id: string){
    return this.httpClient.get<Customer>(this.baseUrl + 'customer/' + id)
  }

  createCustomer(newCustomer: Customer) {
    return this.httpClient.post<Customer>(this.baseUrl + 'customer/new', newCustomer)
  }

  updateCustomer(updatedCustomer: Customer) {
    return this.httpClient.put<Customer>(this.baseUrl + 'customer/' + updatedCustomer.id, updatedCustomer)
  }
}
