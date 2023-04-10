import { Component } from '@angular/core';
import {Invoice} from "../../../_models/invoice";
import {InvoiceService} from "../../../_services/invoice.service";

@Component({
  selector: 'app-index-invoice',
  templateUrl: './index-invoice.component.html',
  styleUrls: ['./index-invoice.component.css']
})
export class IndexInvoiceComponent {
  invoices: Invoice[] = []

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit() {
    this.loadInvoices();
  }

  loadInvoices() {
    this.invoiceService.getAllInvoices().subscribe({
      next: result => {
        this.invoices = result
      },
      error: error => {
        console.error('Error fetching customers:', error)
      }
    })
  }
}
