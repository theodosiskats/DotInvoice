import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {env} from "../../environments/environment";
import {Invoice} from "../_models/invoice";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  baseUrl = env.apiUrl
  invoice: Invoice | undefined
  invoices: Invoice[] = []

  constructor(private httpClient: HttpClient) { }

  getAllInvoices() {
    return this.httpClient.get<Invoice[]>(this.baseUrl + 'invoice')
  }
}
