import { Component } from '@angular/core';
import {Customer} from "../../../_models/customer";
import {CustomerService} from "../../../_services/customer.service";

@Component({
  selector: 'app-index-customer',
  templateUrl: './index-customer.component.html',
  styleUrls: ['./index-customer.component.css']
})
export class IndexCustomerComponent {
  customers: Customer[] = []

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.loadCustomers()
  }

  loadCustomers() {
    this.customerService.getAllCustomers().subscribe({
      next: response => {
        this.customers = response
      },
      error: error => {
        console.error('Error fetching customers:', error)
      }
    });
  }
}
